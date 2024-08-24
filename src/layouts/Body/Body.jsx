import Form from "../../components/Form/Form";
import styles from "./Body.module.css";

export default function Body({
  setNotes,
  formFields,
  dispatch,
  state,
  currentID,
  notes,
  getCurrentNoteStatus,
  setCurrentID,
}) {
  return (
    <div className={styles.body}>
      <Form
        currentID={currentID}
        setNotes={setNotes}
        formFields={formFields}
        dispatch={dispatch}
        state={state}
        notes={notes}
        getCurrentNoteStatus={getCurrentNoteStatus}
        setCurrentID={setCurrentID}
      />
    </div>
  );
}
