import { redirect } from "next/navigation";
import { auth } from "../api/auth/[...nextauth]/options";
import Tile from "./tile";
export default async function Market() {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  const data = [{}];
  return (
    <div>
      <Tile />
    </div>
  );
}
