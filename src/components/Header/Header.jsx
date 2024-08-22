import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="logo" />
    </header>
  );
}
