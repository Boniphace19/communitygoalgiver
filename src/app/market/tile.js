"use client";
import styles from "./market.module.css";
import Link from "next/link";
import Image from "next/image";
import Switch from "/components/switch.js";
import { useRouter } from "next/navigation";
export default function MarketPage() {
  const router = useRouter();
  const data = [
    {
      id: 1,
      image: "/AZIZKI 2.jpg",
      playername: "Aziz Ki",
      minute: "32'",
      price: "1,000",
      team: "/yanga.png",
      goalnumber: "1",
    },
    {
      id: 2,
      image: "/MAYELE.jpg",
      playername: "Fiston Mayele",
      minute: "47'",
      price: "2,000",
      team: "/yanga.png",
      goalnumber: "3",
    },
    {
      id: 3,
      image: "/FEI.jpg",
      playername: "Feisal Salum",
      minute: "62'",
      price: "3,000",
      team: "/azam.png",
      goalnumber: "2",
    },
    {
      id: 4,
      image: "/AZIZKI 2.jpg",
      playername: "Aziz Ki",
      minute: "23'",
      price: "4,000",
      team: "/yanga.png",
      goalnumber: "3",
    },
  ];
  const encodedData = encodeURIComponent(JSON.stringify(data));

  return (
    <main className={styles.main}>
      <div
        style={{
          paddingLeft: "10px",
          paddingBottom: "10px",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Switch />
        <span
          style={{
            fontFamily: "malikfont",
            fontFeatureSettings: "inherit",
            fontWeight: "lighter",
            fontSize: "21.8px",
          }}
        >
          Available
        </span>
      </div>
      <section className={styles.mainbody}>
        <div className={styles.grid} style={{ minHeight: "700px" }}>
          {data.map((items, index) => (
            <section
              onClick={() =>
                router.push(`market/${items.id}?data=${encodedData}`)
              }
              key={index}
              className={styles.img}
            >
              <div className={styles.pimage}>
                <Image
                  src={items.image}
                  alt={`player image ${items.playername}`}
                  fill={true}
                  className={styles.orient}
                />
              </div>
              <div className={styles.i1}>
                <div className={styles.pname}>
                  <p>{`${items.playername} ${items.minute}`}</p>
                </div>
                <div className={styles.mnp}>
                  <div className={styles.match}>
                    <Image
                      src={items.team}
                      alt="home team"
                      width="37"
                      height="30"
                    />
                    <h5>{items.goalnumber}</h5>
                    <h4>VS</h4>
                    <h5>0</h5>
                    <Image
                      src="/simba.png"
                      alt="away team"
                      width="35"
                      height="35"
                    />
                  </div>
                  <div className={styles.pricetag}>
                    <span>Price: {items.price}Tsh</span>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
