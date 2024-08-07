// components/VerticalLine.js

const VerticalLine = ({ height, color, thickness }) => {
  return (
    <div
      style={{
        opacity: "65%",
        display: "block",
        borderLeft: `${thickness}px solid ${color}`,
        height: `${height}px`,
        margin: "0 20px", // Adjust margin as needed
      }}
    ></div>
  );
};

export default VerticalLine;
