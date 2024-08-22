import Button from "../Button/Button";
import styles from "./Form.module.css";

import folderIcon from "../../assets/folder.svg";
import calendarIcon from "../../assets/calendar.svg";

export default function Form() {
  return (
    <form className={styles["journal-form"]}>
      <input
        type="text"
        name="title"
        className={styles["journal-form__title"]}
        placeholder="Название"
      />
      <label className={styles["journal-form__label"]} htmlFor="date">
        <img src={calendarIcon} alt="Calendar Icon" />
        <span>Дата</span>
        <input
          type="date"
          name="date"
          id="date"
          className={styles["journal-form__input"]}
        />
      </label>

      <label className={styles["journal-form__label"]} htmlFor="tag">
        <img src={folderIcon} alt="Folder Icon" />
        <span>Метки</span>
        <input
          type="text"
          name="tag"
          id="tag"
          className={styles["journal-form__input"]}
          placeholder="Метка"
        />
      </label>

      <textarea
        className={styles["journal-form__text"]}
        name="text"
        id="text"
        placeholder="Текст вашего воспоминания..."
      ></textarea>

      <Button text="Сохранить" />
    </form>
  );
}
