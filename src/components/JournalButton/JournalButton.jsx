import { useState } from "react";
import styles from "./JournalButton.module.css";

export default function JournalButton({
  title,
  date,
  description,
  handleClick,
  isActive,
  id,
}) {
  function truncateText(text) {
    if (text.length > 15) {
      return text.slice(0, 15) + "...";
    }
    return text;
  }

  return (
    <button
      onClick={() => {
        handleClick(id);
      }}
      className={`${styles["journal-button"]} ${isActive ? "active" : ""}`}
    >
      <h3 className={styles["journal-button__header"]}>
        {truncateText(title)}
      </h3>
      <div className={styles["journal-button__info"]}>
        <span className={styles["journal-button__date"]}>{date}</span>
        <p className={styles["journal-button__description"]}>
          {truncateText(description)}
        </p>
      </div>
    </button>
  );
}
