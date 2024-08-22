import { useState } from "react";
import AddButton from "../../components/AddButton/AddButton";
import Header from "../../components/Header/Header";
import JournalList from "../../components/JournalList/JournalList";
import styles from "./Menu.module.css";
import classNames from "classnames";
import arrowIcon from "../../assets/arrow.svg";

export default function Menu({ notes, handleClick, handleClickNewMemories }) {
  const [menuVisible, setMenuVisible] = useState(true);

  function handleMenuViisvle() {
    setMenuVisible((prev) => !prev);
  }

  return (
    <div
      className={classNames(styles["menu"], {
        hide: !menuVisible,
      })}
    >
      <Header />
      <AddButton
        text="Новое воспоминание"
        handleClickNewMemories={handleClickNewMemories}
      />
      <JournalList notes={notes} handleClick={handleClick} />
      <button
        className={classNames(styles["menu-action__btn"], {
          "rotate-menu-btn": !menuVisible,
        })}
        onClick={handleMenuViisvle}
      >
        <img src={arrowIcon} alt="arrow icon" />
      </button>
    </div>
  );
}
