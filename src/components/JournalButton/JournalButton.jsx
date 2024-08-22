import styles from "./JournalButton.module.css";

export default function JournalButton() {
  return (
    <button className={styles["journal-button"]}>
      <h3 className={styles["journal-button__header"]}>
        Подготовка к обновлению курсов
      </h3>
      <div className={styles["journal-button__info"]}>
        <span className={styles["journal-button__date"]}>21.03.2002</span>
        <p className={styles["journal-button__description"]}>
          Сегодня провёл весь день за...
        </p>
      </div>
    </button>
  );
}
