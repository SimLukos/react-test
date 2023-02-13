import styles from "./button.module.css";

export default function Button({ title, align, onClick }) {
  return (
    <div
      className={styles.buttonWrapper}
      style={{ justifyContent: `${align}` }}
    >
      <button onClick={onClick} className={styles.button}>
        {title}
      </button>
    </div>
  );
}
