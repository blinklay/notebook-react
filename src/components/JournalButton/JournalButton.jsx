import styles from "./JournalButton.module.css";

export default function JournalButton({ title, date, description }) {
  return (
    <button className={styles["journal-button"]}>
      <h3 className={styles["journal-button__header"]}>{title}</h3>
      <div className={styles["journal-button__info"]}>
        <span className={styles["journal-button__date"]}>{date}</span>
        <p className={styles["journal-button__description"]}>{description}</p>
      </div>
    </button>
  );
}
