import AddButton from "../../components/AddButton/AddButton";
import Header from "../../components/Header/Header";
import JournalList from "../../components/JournalList/JournalList";
import styles from "./Menu.module.css";

export default function Menu({ notes, handleClick, handleClickNewMemories }) {
  return (
    <div className={styles.menu}>
      <Header />
      <AddButton
        text="Новое воспоминание"
        handleClickNewMemories={handleClickNewMemories}
      />
      <JournalList notes={notes} handleClick={handleClick} />
    </div>
  );
}
