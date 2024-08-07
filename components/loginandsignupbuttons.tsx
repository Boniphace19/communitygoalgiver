"use client";
import Login from "../src/app/login/page";
import SignUp from "../src/app/signup/page";
import styles from "./header.module.css";
import Modal from "./modal";

import { useState } from "react";
export default function Loginandsignupbuttons() {
  const [openUp, setOpenUp] = useState(false);
  const [openUp1, setOpenUp1] = useState(false);
  return (
    <div className="flex xl:flex-row md:flex-col xl:gap-10 md:3 px-3">
      <button className={styles.button} onClick={() => setOpenUp1(true)}>
        SIGN UP
      </button>

      <button className={styles.button} onClick={() => setOpenUp(true)}>
        SIGN IN
      </button>
      <Modal isOpen={openUp} onClose={() => setOpenUp(false)}>
        {/*here to import signin  */}
        <Login closeModal={() => setOpenUp(false)} />
      </Modal>

      <Modal isOpen={openUp1} onClose={() => setOpenUp1(false)}>
        <SignUp closeModal={() => setOpenUp1(false)} />
      </Modal>
    </div>
  );
}
