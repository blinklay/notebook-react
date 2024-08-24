import { useReducer, useState } from "react";
import Body from "./layouts/Body/Body";
import Menu from "./layouts/Menu/Menu";
import { useEffect } from "react";
import reducer from "./tools/reducer";

const notesLocalKey = "notes";

const formFields = {
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

function formatDate(date) {
  const [day, month, year] = date.split(".");
  let changedYear = year;

  if (year.length === 1) changedYear = year + "000";
  if (year.length === 2) changedYear = year + "00";
  if (year.length === 3) changedYear = year + "0";

  const formattedDate = `${changedYear}-${month}-${day}`;
  return formattedDate;
}

function App() {
  const [state, dispatch] = useReducer(reducer, formFields);
  const [currentID, setCurrentID] = useState(null);
  const [notes, setNotes] = useState(
    localStorage.getItem(notesLocalKey)
      ? JSON.parse(localStorage.getItem(notesLocalKey))
      : []
  );

  useEffect(() => {
    getCurrentNoteStatus();
  }, [currentID]);

  function refreshNotesStatus() {
    setNotes((prev) =>
      prev.map((btn) => {
        btn.isActive = false;
        return btn;
      })
    );
  }

  function getCurrentNoteStatus() {
    setNotes((prev) =>
      prev.map((btn) => {
        if (btn.id === currentID) {
          btn.isActive = true;
        }
        return btn;
      })
    );
  }

  function handleClick(id) {
    refreshNotesStatus();

    if (currentID === id) {
      getCurrentNoteStatus();
    }

    const { title, date, tag, description } = notes.find(
      (item) => item.id === id
    );
    setCurrentID(id);
    dispatch({ type: "SET_TITLE", value: title });
    dispatch({ type: "SET_TAG", value: tag });
    dispatch({ type: "SET_DATE", value: formatDate(date) });
    dispatch({ type: "SET_TEXT", value: description });
  }

  function handleClickNewMemories() {
    refreshNotesStatus();

    setCurrentID(null);
    dispatch({ type: "CLEAR_FORM" });
  }

  useEffect(() => {
    localStorage.setItem(notesLocalKey, JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Menu
        notes={notes}
        handleClick={handleClick}
        handleClickNewMemories={handleClickNewMemories}
      />
      <Body
        setNotes={setNotes}
        formFields={formFields}
        dispatch={dispatch}
        state={state}
        currentID={currentID}
        notes={notes}
        getCurrentNoteStatus={getCurrentNoteStatus}
        setCurrentID={setCurrentID}
      />
    </div>
  );
}

export default App;
