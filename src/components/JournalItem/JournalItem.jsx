import JournalButton from "../JournalButton/JournalButton";
import styles from "./JournalItem.module.css";

export default function JournalItem() {
  return (
    <li className={styles["journal-item"]}>
      <JournalButton />
    </li>
  );
}
