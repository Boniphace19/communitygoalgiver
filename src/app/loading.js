import styles from "/components/modal.module.css";
import Image from "next/image";
export default function LoadingPage() {
  return (
    <div className={styles.divmain}>
      <Image src="/loading1.svg" height="300" width="300" alt="Loading" />
    </div>
  );
}
