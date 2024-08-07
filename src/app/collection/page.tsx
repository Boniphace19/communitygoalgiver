import { redirect } from "next/navigation";
import { auth } from "../api/auth/[...nextauth]/options";

export default async function Collection() {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  const data = [{}];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "700px",
        backgroundColor: " white",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "150px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "black",
            width: "50%",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              paddingLeft: "30px",
              paddingTop: "15px",
              gap: "10px",
            }}
          >
            <span className="font-bold" style={{ fontWeight: "100px" }}>
              Profile name:
            </span>
            <span className="opacity-50 ">Hamis Hassan</span>
          </div>
          <div
            style={{
              display: "flex",
              paddingLeft: "30px",
              paddingTop: "15px",
              gap: "10px",
            }}
          >
            <span className="font-bold" style={{ fontWeight: "100px" }}>
              Owned collectibles:
            </span>
            <span className="opacity-50 ">5 collectibles</span>
          </div>
          <div
            style={{
              display: "flex",
              paddingLeft: "30px",
              paddingTop: "15px",
              gap: "10px",
            }}
          >
            <span className="font-bold" style={{ fontWeight: "100px" }}>
              Owned physical balls:
            </span>
            <span className="opacity-50 ">6 balls</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "black",
            width: "50%",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              paddingLeft: "30px",
              paddingTop: "15px",
              gap: "10px",
            }}
          >
            <span className="font-bold" style={{ fontWeight: "100px" }}>
              Balance:
            </span>
            <span className="opacity-50 ">10,000 Tsh.</span>
          </div>
          <div
            style={{
              display: "flex",
              paddingLeft: "30px",
              paddingTop: "15px",
              gap: "10px",
            }}
          >
            <button className="transition ease-in-out bg-amber-500/50 delay-150 duration-300 rounded-full font-medium font-sans p-2 hover:bg-amber-500/100">
              TRADE WITH COLLECTIBLES
            </button>
           
            <button className="transition ease-in-out  bg-amber-500/50 delay-150 duration-300  rounded-full font-medium font-sans p-2 hover:bg-amber-500/100">
              DEPOSIT
            </button>
          </div>
        </div>
      </div>
      <hr
        style={{ height: "10px", backgroundColor: "black", padding: "0" }}
      ></hr>
      <div
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "center",
          color: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            width: "50%",
            paddingLeft: "30px",
            paddingTop: "15px",
            gap: "10px",
          }}
        >
          <span className="font-bold" style={{ fontWeight: "100px" }}>
            Collectibles
          </span>
          <ul style={{ listStyleType: "none", opacity: "50%" }}>
            <li>Fiston Mayele</li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            width: "50%",
            paddingLeft: "30px",
            paddingTop: "15px",
            gap: "10px",
          }}
        >
          <span className="font-bold" style={{ fontWeight: "100px" }}>
            Physical balls
          </span>
          <ul style={{ listStyleType: "none", opacity: "50%" }}>
            <li>Fiston Mayele</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
