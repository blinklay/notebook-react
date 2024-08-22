import JournalItem from "../JournalItem/JournalItem";
import styles from "./JournalList.module.css";

export default function JournalList() {
  return (
    <ul className={styles["journal-list"]}>
      <JournalItem />
      <JournalItem />
      <JournalItem />
    </ul>
  );
}
