import NextAuth from "next-auth";
import { handlers } from "./options";
export const { GET, POST } = handlers;
/*
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
*/
