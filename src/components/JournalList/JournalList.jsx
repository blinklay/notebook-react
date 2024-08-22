import JournalItem from "../JournalItem/JournalItem";
import styles from "./JournalList.module.css";

export default function JournalList({ notes, handleClick }) {
  return (
    <ul className={styles["journal-list"]}>
      {notes.map((note) => (
        <JournalItem key={note.id} note={note} handleClick={handleClick} />
      ))}
    </ul>
  );
}
