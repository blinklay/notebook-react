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

function App() {
  const [state, dispatch] = useReducer(reducer, formFields);
  const [currentID, setCurrentID] = useState(null);
  const [notes, setNotes] = useState(
    localStorage.getItem(notesLocalKey)
      ? JSON.parse(localStorage.getItem(notesLocalKey))
      : []
  );

  function handleClick(id) {
    const { title, date, tag, description } = notes.find(
      (item) => item.id === id
    );
    setCurrentID(id);
    dispatch({ type: "SET_TITLE", value: title });
    dispatch({ type: "SET_TAG", value: tag });
    dispatch({ type: "SET_DATE", value: date });
    dispatch({ type: "SET_TEXT", value: description });
  }

  function handleClickNewMemories() {
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
      />
    </div>
  );
}

export default App;
