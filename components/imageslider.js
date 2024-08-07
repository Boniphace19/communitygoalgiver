import { useEffect, useState } from "react";

export default function Slider({
  children: slides,
  autoslide = false,
  autoslideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  //useEffect(()=>{if (!autoslide){ return const slideInterval=setInterval(next,autoslideInterval)}  return ()=>clearInterval(slideInterval) },[])
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <div
        style={{
          display: "flex",
          transform: `translateX(-${curr * 100}%)`,
        }}
      >
        {slides}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          inset: "0",
          padding: "20px",
        }}
      >
        <button
          onClick={prev}
          style={{
            backgroundColor: "transparent",
            borderColor: "transparent",
            color: "red",
          }}
        >
          Left
        </button>
        <button
          onClick={next}
          style={{
            backgroundColor: "transparent",
            borderColor: "transparent",
            color: "red",
          }}
        >
          Right
        </button>
      </div>
    </div>
  );
}
