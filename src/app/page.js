import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/*Navigation Bar */}
      {/*background image*/}
      <section>
        <div>
          <Image
            src="/backgroundimage.png"
            alt="backgroung-image"
            width="1550"
            height="800"
            className="opacity-90"
          />
        </div>
      </section>
    </main>
  );
}
