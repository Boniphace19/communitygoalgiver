"use client";
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";
interface sessionProviderProps {
  children: ReactNode;
}
const sessionProvider: FC<sessionProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default sessionProvider;
