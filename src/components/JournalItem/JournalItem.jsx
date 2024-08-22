import JournalButton from "../JournalButton/JournalButton";
import styles from "./JournalItem.module.css";

export default function JournalItem({ note }) {
  return (
    <li className={styles["journal-item"]}>
      <JournalButton {...note} />
    </li>
  );
}
