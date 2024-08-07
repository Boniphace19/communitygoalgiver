// components/Switch.js

import { useState } from "react";
import styles from "./switch.module.css";

const Switch = ({ onChange, checked }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleSwitch = () => {
    const newValue = !isChecked;
    setIsChecked((prev) => !prev);
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isChecked} onChange={toggleSwitch} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Switch;
