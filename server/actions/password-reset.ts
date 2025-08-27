
'use server';
import { ResetSchema } from "@/types/reset-schema";
import { createSafeActionClient } from "next-safe-action";
import {  generatePasswordResetToken } from "./tokens";
import { passwordResetTokens, users } from "../schema";
import { eq } from "drizzle-orm";
import { db } from "..";
import { sendPasswordResetEmail } from "./email";


const actionClient = createSafeActionClient();

export const reset = actionClient
  .inputSchema(ResetSchema)
  .action(async ({ parsedInput: { email } }) => {
   
    const existingUser = await db.query.users.findFirst({
        where: eq(users.email, email),
    })

    if(!existingUser) {
        return {error: "user not found"}
    }

    const passwordResetToken = await generatePasswordResetToken(email)
    if(!passwordResetToken){
        return { error: "Token not generated"}
    }
    await sendPasswordResetEmail(passwordResetToken[0].email, passwordResetToken[0].token)
    return {success: "Email sent"}


  });
