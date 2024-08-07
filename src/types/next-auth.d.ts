import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    lastname: string | null;
    firstname: string | null;
    email: string | null;
  }
  interface Session {
    user: User & {
      lastname: string;
      firstname: string;
    };
    token: {
      lastname: string;
      firstname: string;
    };
  }
}
