import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/server"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "@/types/login-schema"
import { eq } from "drizzle-orm"
import { accounts, users } from "./schema"
import bcrypt from 'bcrypt';
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  secret: process.env.AUTH_SECRET!,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({session, token}){
      if(session && token.sub){
        session.user.id = token.sub
      }
      if(session.user && token.role){
        session.user.role = token.role as string
      }

      if (session.user){
        session.user.name = token.name
        session.user.email = token.email as string
        session.user.isOAuth = token.isOAuth as boolean
        session.user.image = token.image as string
      }
      return session;
    },
    async jwt({token}){
      if(!token.sub) return token
      const existingUser = await db.query.users.findFirst({
        where: eq(users.id, token.sub)
      }) 
      if(!existingUser) return token
      const existingAccount = await db.query.accounts.findFirst({
        where: eq(accounts.userId, existingUser.id)
      })

      token.isOAuth = !!existingAccount
      token.name = existingUser.name
      token.email = existingUser.email
      token.role = existingUser.role
      token.image = existingUser.image
      return token
    }
  },
  providers: [
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHub({
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null;

        // Validate using zod schema
        const parsed = LoginSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        // Fetch user from database
        const user = await db.query.users.findFirst({
          where: eq(users.email, email),
        });

        if (!user || !user.password) return null;

        // Compare password hashes
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return null;

        // Return user object (NextAuth requires at least an id)
        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
})