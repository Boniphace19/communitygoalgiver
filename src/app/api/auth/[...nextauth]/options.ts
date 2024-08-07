//import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../../lib/client";
import { compare } from "bcrypt";

import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const existingUser = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!existingUser) {
          return null;
        }

        if (existingUser.password) {
          const matchingPassword = await compare(
            credentials.password as string,
            existingUser.password
          );
          if (!matchingPassword) {
            return null;
          }
        }

        return {
          id: `${existingUser.id}`,
          email: existingUser.email,
          username: existingUser.username,
          fullname: existingUser.fullname,
        };
      },
    }),
  ],
  callbacks: {
    /*
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error("No profile");
      }
      await prisma.user.upsert({
        where: { email: profile.email },
        create: {
          email: profile.email,
          fullname: profile.fullname,
          username: "",
          mobileno: "",
          password: "",
        },
        update: {
          fullname: profile.name,
        },
      });
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user.username,
          fullname: user.fullname,
        };
      }
      return token;
    },
    /* async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
          fullname: token.fullname,
        },
      };
    },*/
  },
});

/*export const authOptions: NextAuthOptions = {
 
};*/
