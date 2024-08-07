"use client";
import styles from "./modal.module.css";
export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div className={styles.divmain} id="wrapper" onClick={handleClose}>
      <button onClick={onClose} style={{ marginBottom: "20px" }}>
        <div class={styles.outer}>
          <div class={styles.inner}>
            <label>Back</label>
          </div>
        </div>
      </button>
      <div className={styles.div2}>{children}</div>
    </div>
  );
}
