import styles from "./AddButton.module.css";
import plusIcon from "../../assets/plus.svg";

export default function AddButton({ text, handleClickNewMemories }) {
  return (
    <button onClick={handleClickNewMemories} className={styles["add-button"]}>
      <img src={plusIcon} alt="" />
      {text}
    </button>
  );
}
