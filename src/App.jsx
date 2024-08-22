import { useState } from "react";
import Body from "./layouts/Body/Body";
import Menu from "./layouts/Menu/Menu";
import { useEffect } from "react";

const notesLocalKey = "notes";

function App() {
  const [notes, setNotes] = useState(
    localStorage.getItem(notesLocalKey)
      ? JSON.parse(localStorage.getItem(notesLocalKey))
      : []
  );

  // useEffect(() => {
  //   const data = localStorage.getItem(notesLocalKey)
  //     ? JSON.parse(localStorage.getItem(notesLocalKey))
  //     : [];
  //   setNotes(data);
  // }, []);

  useEffect(() => {
    localStorage.setItem(notesLocalKey, JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Menu notes={notes} />
      <Body setNotes={setNotes} />
    </div>
  );
}

export default App;
