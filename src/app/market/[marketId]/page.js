"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

function Market({ params }) {
  const searchParams = useSearchParams();
  let searchResult = searchParams.get("data");
  console.log(searchResult);

  return (
    <div className="max-screen-w-xl bg-white-500" style={{height:"700px", justifyItems:"center"}}>
      <h1 className="font" style={{alignSelf:"center"}}>Purchase Ball</h1>
      

    </div>
  );
}
export default Market;
