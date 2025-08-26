'use server';
import { RegisterSchema } from "@/types/register-schema";
import { createSafeActionClient } from "next-safe-action";
import bcrypt from 'bcrypt';


import { db } from "..";
import { eq } from "drizzle-orm";
import { users } from "../schema";
import { generateEmailVerificationToken } from "./tokens";
import { sendVerificationEmail } from "./email";



const actionClient = createSafeActionClient()

export const emailRegister = actionClient
  .inputSchema(RegisterSchema)
  .action(async ({ parsedInput }) => {
    const { email, name, password } = parsedInput
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    console.log(email)  

    const existingUser = await db.query.users.findFirst ({ 
        where: eq(users.email, email),
    // Continue with the registration process using hashedPassword
  })

  // Check if email is already in db than say it's in use, 
  if (existingUser) {
    if(!existingUser.emailVerified) {
        const verificationToken = await generateEmailVerificationToken(email);
        await sendVerificationEmail(verificationToken[0].email, verificationToken[0].token)

        return {success: 'Email Confirmation resent'}
    }
    return {error: 'Email is already in use'}
    }
    await db.insert(users).values({
      email,
      name,
      // password: hashedPassword,
    })
    const verificationToken = await generateEmailVerificationToken(email)

  
      await sendVerificationEmail(verificationToken[0].token, verificationToken[0].email)
    return {success: "Confirmation Email Sent!"}

  }

  //if not register the user but also send the verification email

  )