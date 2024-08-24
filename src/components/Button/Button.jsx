import classNames from "classnames";
import styles from "./Button.module.css";

export default function Button({ text, type, onCLick }) {
  return (
    <button
      onClick={onCLick}
      className={classNames(styles["button"], {
        "danger-btn": type === "danger",
      })}
    >
      {text}
    </button>
  );
}
