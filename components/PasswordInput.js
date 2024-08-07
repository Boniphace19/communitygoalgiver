import { useState } from "react";
import styles from "./header.module.css";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handleChange}
        placeholder="Enter your Password"
        className={styles.formInput}
      />
      <button onClick={togglePasswordVisibility}></button>
    </div>
  );
};

export default PasswordInput;
