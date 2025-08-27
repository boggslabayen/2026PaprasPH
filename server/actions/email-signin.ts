// 'use server';
// import { LoginSchema } from "@/types/login-schema";
// import { createSafeActionClient } from "next-safe-action";
// import { db } from "..";
// import { eq } from "drizzle-orm";
// import { users } from "../schema";
// import { generateEmailVerificationToken } from "./tokens";
// import { sendVerificationEmail } from "./email";
// import { signIn } from "@/server/auth";
// import { AuthError } from "next-auth";


// const actionClient = createSafeActionClient()

// export const emailSignIn = actionClient.inputSchema(LoginSchema).action(async ({ parsedInput: { email, password,code } }) => {

//     try{

//          // Check if user is in the database
//     const existingUser = await db.query.users.findFirst({
//         where: eq(users.email, email)
//     })

//     if(existingUser?.email !== email){
//         return{
//             error: "Email not Found"
//         }
//     }




//     // If user is not verified
//     if (!existingUser.emailVerified) {
//         const verificationToken = await generateEmailVerificationToken(existingUser.email)
//         await sendVerificationEmail(verificationToken[0].email, verificationToken[0].token)
//         return {success: 'Confirmation Email Sent!'}
//     }


// // 2FA ToDo

//     await signIn('credentials', {
//     email,
//     password,
//     redirectTo: "",
// })


//     return { success: "User Signed In"}
    
//     } catch(error){
//         console.log(error);
//         if (error instanceof AuthError){
//             switch(error.type){
//                 case "CredentialsSignin": 
//                 return {error: "Email or Password Incorrect"}
//                 case "AccessDenied":
//                 return{error: error.message}
//                 case 'OAuthSignInError':
//                 return {error: error.message}
//                 default:
//                 return {error: "Something went wrong"}
//             }
//         }
//         throw error
//     }
   
// })

'use server';
import { LoginSchema } from "@/types/login-schema";
import { createSafeActionClient } from "next-safe-action";
import { db } from "..";
import { eq } from "drizzle-orm";
import { users } from "../schema";
import { generateEmailVerificationToken } from "./tokens";
import { sendVerificationEmail } from "./email";
import bcrypt from "bcrypt";

const actionClient = createSafeActionClient();

export const emailSignIn = actionClient
  .inputSchema(LoginSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    try {
      // Check if user exists
      const user = await db.query.users.findFirst({
        where: eq(users.email, email),
      });

      if (!user) {
        return { error: "Email not found" };
      }

      // If user is not verified
      if (!user.emailVerified) {
        const [verificationToken] = await generateEmailVerificationToken(user.email);
        await sendVerificationEmail(verificationToken.email, verificationToken.token);
        return { success: "Confirmation email sent!" };
      }

      // Check password
      if (!user.password || !(await bcrypt.compare(password, user.password))) {
        return { error: "Email or password incorrect" };
      }

      // Return success and user info; client should call signIn() next
      return { success: "Credentials valid", user: { email: user.email }, redirectTo: "/dashboard" };
    } catch (error) {
      console.error(error);
      return { error: "Something went wrong" };
    }
  });
