'use server'
import { NewPasswordSchema } from "@/types/new-password-schema";
import { createSafeActionClient } from "next-safe-action";
import { getPasswordResetTokenbyToken } from "./tokens";
import { passwordResetTokens, users } from "../schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { db } from "..";
import { Pool } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-serverless"


const actionClient = createSafeActionClient();

export const newPassword = actionClient
  .inputSchema(NewPasswordSchema)
  .action(async ({ parsedInput: { password, token } }) => {
    const pool = new Pool({connectionString: process.env.DATABASE_URL})
    const dbPool = drizzle(pool)
    //Check the Token
    if(!token) {
        return {error: "Missing Token"}
    }
    // here we need to check if token is valid
    const existingToken = await getPasswordResetTokenbyToken(token)
    if(!existingToken) {
        return {error: "Token not found"}
    }
    const hasExpired = new Date(existingToken.expires) < new Date();
    if(hasExpired) {
        return {error: "Token has expired"}
    }

    const existingUser = await db.query.users.findFirst({
        where: eq(users.email, existingToken.email),
    })

    if(!existingUser) {
        return {error: "user not found"}
    }

    const hashedPassword = await bcrypt.hash(password,10)
    // UPDATE PASSWORD

    await dbPool.transaction(async (tx)=> {
        await tx.update(users).set({
            password: hashedPassword,
        }).where(eq(users.id, existingUser.id))
        await tx.delete(passwordResetTokens).where(eq(passwordResetTokens.id, existingToken.id))
    })

    return {success: "Password updated"}


  });
