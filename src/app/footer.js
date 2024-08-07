import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import CurrentYear from "../../components/year";

function Footer() {
  return (
    <footer className={`${styles.marginTop} sticky bottom-0`}>
      <div className={styles.footer}>
        <div className={styles.footernav}>
          <div className={styles.logodiv}>
            <div>
              <Image
                loading="lazy"
                src="/logo.png"
                width="45"
                height="45"
                alt="Community Goal Giver logo"
                className=""
              />
            </div>
            <div>
              COMMUNITY <br /> GOAL GIVER.
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>
            <nav className="">
              <ul className={styles.nobullets}>
                <li>
                  <a href="/home" className={styles.navlinks}>
                    Home
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/about" className={styles.navlinks}>
                    About us
                  </a>
                </li>
                <li className="">
                  <a href="/testimonials" className={styles.navlinks}>
                    Contacts
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="">
            <div className={styles.socialmedia}>
              <Image
                loading="lazy"
                src="/instagram2.avif"
                alt="Social media icon 1"
                width="25"
                height="25"
                className=""
              />
              <Image
                loading="lazy"
                src="/twitter.avif"
                width="25"
                height="25"
                alt="Social media icon 2"
                className=""
              />
              <Image
                loading="lazy"
                src="/facebook.avif"
                width="25"
                height="25"
                alt="Social media icon 3"
                className="shrink-0 w-6 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className={styles.new}>
          <p>
            Copyright ©
            <CurrentYear />
            .Community Goal Giver. <br /> All Rights Reserved.
          </p>
          |<span>Terms & Conditions</span>|<span>Policies and privacy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
