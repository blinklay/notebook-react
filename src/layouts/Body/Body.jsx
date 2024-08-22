import Form from "../../components/Form/Form";
import styles from "./Body.module.css";

export default function Body({ setNotes }) {
  return (
    <div className={styles.body}>
      <Form setNotes={setNotes} />
    </div>
  );
}
