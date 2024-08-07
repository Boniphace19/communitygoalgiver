import Image from "next/image";
import Table from "/components/table.js";

import { redirect } from "next/navigation";
//import { auth } from "../api/auth/[...nextauth]/options";

const HomePage = async function HomePage() {
  return (
    <div
      style={{
        minHeight: "700px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "black",
        paddingTop: "50px",
      }}
    >
      <Table />
    </div>
  );
};
export default HomePage;
