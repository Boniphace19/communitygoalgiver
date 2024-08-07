import React from "react";

function CurrentYear() {
  const currentYear = new Date().getFullYear();

  return <span>{currentYear}</span>;
}

export default CurrentYear;
