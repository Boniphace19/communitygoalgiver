import styles from "./ranking.module.css";
import Link from "next/link";
import { toast, Toaster } from "sonner";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "../api/auth/[...nextauth]/options";
import VerticalLine from "../../../components/verticalline";

export default async function Ranking() {
  const session = await auth();
  if (!session?.user) {
     redirect("/");
  }
  const data = [
    {
      id: "1",
      username: "Hamis Hassan",
      numberOfBalls: "196 golballs",
      rank: "1",
    },
    {
      rank: "2",
      id: "2",
      username: "Zuwena Hussein",
      numberOfBalls: "190 golballs",
    },
    {
      id: "3",
      username: "Oscar Oscar",
      numberOfBalls: "188 golballs",
      rank: "3",
    },
    {
      id: "4",
      username: "Oscar Rajabu",
      numberOfBalls: "186 golballs",
      rank: "4",
    },
    {
      id: "5",
      username: "Omary Athumani",
      numberOfBalls: "185 golballs",
      rank: "5",
    },
  ];
  return (
    <main className={styles.main}>
      <div className={styles.mainbody}>
        {data.map((item) => (
          <div key={item.id} className={styles.ab}>
            <div
              style={{
                width: "100px",
                display: "flex",
                alignItems: "center",

                justifyContent: "center",
              }}
            >
              <h2>{item.rank}</h2>
              <VerticalLine height={37} color="white" thickness={1} />
            </div>
            <div
              style={{
                width: "700px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <span>{item.username}</span>
              <span>{item.numberOfBalls}</span>
            </div>
          </div>
        ))}
        <Toaster richColors position="top-right" />
      </div>
    </main>
  );
}
