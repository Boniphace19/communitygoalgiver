"use client"
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Loginandsignupbuttons from "./loginandsignupbuttons";
import Navlinks from "./navlinks";
import VerticalLine from "./verticalline";
import Logout from "./logout";
//import { auth, signOut } from "../src/app/api/auth/[...nextauth]/options";
import { redirect, useRouter } from "next/navigation";

import { ShoppingCart } from "lucide-react";
import Search from "./search";
import {useAuthState} from  "react-firebase-hooks/auth";
import {auth} from "@/app/config/firebase";
import {toast,Toaster} from "sonner";
import {signOut} from "firebase/auth";

export default  function Page() {
  //const session = await auth();
  const [user] = useAuthState(auth);
  const router= useRouter();
  
    
  
  const handleSignOut = async () => {
    await signOut(auth);
    
    router.push('/');
  };


  return (
    <nav className={styles.div1}>
      <div className={styles.div2}>
        {/*Logo*/}
        <div className={styles.div4}>
          <div>
            <Image src="/logo.png" width="50" height="50" alt="Logo image" />
          </div>
          <div>
            <p>
              COMMUNITY <br /> GOAL GIVER
            </p>
          </div>
        </div>
        {/*Search Bar */}
        <div className={styles.div5}>
          <Search />
        </div>
        {/*Authentication Links */}
        <div className={styles.div6}>
          <Link href="">
            <div className="flex items-center content-stretch">
              <ShoppingCart size={32} />
            </div>
          </Link>
          {/*here to import login and signup*/}
          {user ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                opacity: "0.9",
                height: "40px",
                padding: "5px",
                borderRadius: "40%",
                alignItems: "center",
              }}
            >
              <p className="text-cyan-200 underline decoration-slate-400">
                {user.email}
              </p>
              <div className="ml-6">
                <button className="bg-color-red " onClick={handleSignOut}>LOG OUT</button>
              </div>
            </div>
          ) : (
            <Loginandsignupbuttons />
          )}
          
        </div>
      </div>
      {/*Navigation Links */}
      <div className={styles.div3}>
        <Navlinks href="/home">HOME</Navlinks>
        <VerticalLine color="#ffbf00" thickness="3" height="22"></VerticalLine>
        <Navlinks href="/market">MARKET</Navlinks>
        <VerticalLine color="#ffbf00" thickness="3" height="22"></VerticalLine>
        <Navlinks href="/ranking">RANKINGS</Navlinks>
        <VerticalLine color="#ffbf00" thickness="3" height="22"></VerticalLine>
        <Navlinks href="/collection">COLLECTIONS</Navlinks>
      </div>
    </nav>
  );
}
