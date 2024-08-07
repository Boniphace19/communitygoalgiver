import { getServerSession } from "next-auth";
import NextAuth from "next-auth/next";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const session = await getServerSession;
  return NextResponse.json({ authenticated: !!session });
};
