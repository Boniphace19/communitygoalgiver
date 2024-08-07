import React from "react";
import styles from "/components/MainPopupWindow.module.css";
import PasswordInput from "./PasswordInput";

const PopupWindow = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.maindiv}>
      <div>
        <div>
          <h3>SIGN IN</h3>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <input
              type="e-mail"
              placeholder="E-mail"
              className={styles.formInput}
            />
            <PasswordInput />
            <button type="submit" className={styles.bttn}>
              SIGN IN
            </button>
          </form>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PopupWindow;
