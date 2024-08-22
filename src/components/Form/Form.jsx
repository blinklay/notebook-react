import Button from "../Button/Button";
import styles from "./Form.module.css";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

import folderIcon from "../../assets/folder.svg";
import calendarIcon from "../../assets/calendar.svg";
import { useEffect, useReducer, useState } from "react";

const initialFormFields = {
  title: "",
  date: "",
  tag: "",
  text: "",
  errors: {
    title: false,
    date: false,
    text: false,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_TITLE":
      return {
        ...state,
        title: action.value,
      };
    case "SET_TAG":
      return {
        ...state,
        tag: action.value,
      };
    case "SET_DATE":
      return {
        ...state,
        date: action.value,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.value,
      };
    case "VALIDATE_FORM":
      const errors = {
        title: false,
        date: false,
        text: false,
      };

      if (state.title === "") errors.title = true;
      if (state.date === "") errors.date = true;
      if (state.text === "") errors.text = true;

      return {
        ...state,
        errors,
      };
    case "RESET_ERROR":
      return {
        ...state,
        errors: {
          title: false,
          date: false,
          text: false,
        },
      };
    case "CLEAR_FORM":
      return {
        ...state,
        title: "",
        date: "",
        tag: "",
        text: "",
      };
    default:
      return state;
  }
}

export default function Form({ setNotes }) {
  const [state, dispatch] = useReducer(reducer, initialFormFields);
  const { errors } = state;
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    let timer;
    if (errors.text || errors.title || errors.date) {
      setFormData(null);

      timer = setTimeout(() => {
        dispatch({ type: "RESET_ERROR" });
      }, 2000);

      return;
    }
    if (formData) {
      setNotes((prev) => [
        ...prev,
        {
          title: formData.title,
          date: formData.date,
          description: formData.text,
          tag: formData.tag,
          id: uuidv4(),
        },
      ]);

      dispatch({ type: "CLEAR_FORM" });
    }
    return () => {
      clearTimeout(timer);
    };
  }, [errors]);

  function submitForm(e) {
    e.preventDefault();

    dispatch({ type: "VALIDATE_FORM" });

    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData.entries());

    setFormData(formObj);
  }

  return (
    <form className={styles["journal-form"]} onSubmit={submitForm}>
      <input
        value={state.title}
        onChange={(e) => {
          dispatch({ type: "SET_TITLE", value: e.target.value });
        }}
        type="text"
        name="title"
        className={classNames(styles["journal-form__title"], {
          "animate-error": state.errors.title,
        })}
        placeholder="Название"
      />
      <label className={styles["journal-form__label"]} htmlFor="date">
        <img src={calendarIcon} alt="Calendar Icon" />
        <span>Дата</span>
        <input
          value={state.date}
          onChange={(e) =>
            dispatch({ type: "SET_DATE", value: e.target.value })
          }
          type="date"
          name="date"
          id="date"
          className={classNames(styles["journal-form__input"], {
            "animate-error": state.errors.date,
          })}
        />
      </label>

      <label className={styles["journal-form__label"]} htmlFor="tag">
        <img src={folderIcon} alt="Folder Icon" />
        <span>Метки</span>
        <input
          value={state.tag}
          onChange={(e) => dispatch({ type: "SET_TAG", value: e.target.value })}
          type="text"
          name="tag"
          id="tag"
          className={styles["journal-form__input"]}
          placeholder="Метка"
        />
      </label>

      <textarea
        value={state.text}
        onChange={(e) => dispatch({ type: "SET_TEXT", value: e.target.value })}
        className={classNames(styles["journal-form__text"], {
          "animate-error": state.errors.text,
        })}
        name="text"
        id="text"
        placeholder="Текст вашего воспоминания..."
      ></textarea>

      <Button text="Сохранить" />
    </form>
  );
}
