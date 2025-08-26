'use server';
import { LoginSchema } from "@/types/login-schema";
import { createSafeActionClient } from "next-safe-action";
import { db } from "..";
import { eq } from "drizzle-orm";
import { users } from "../schema";
const actionClient = createSafeActionClient()

export const emailSignIn = actionClient.inputSchema(LoginSchema).action(async ({ parsedInput: { email, password, code } }) => {
    const existingUser = await db.query.users.findFirst({
        where: eq(users.email, email)
    })

    if(existingUser?.email !== email){
        return{
            error: "Email not Found"
        }
    }

    if(!existingUser.emailVerified){

    }

    console.log(email)  
    return { success: email}
})


