import styles from "./textArea.module.css";

export default function textArea({ placeHolder, value, onChange }) {
  return (
    <div className={styles.textAreaWrapper}>
      <textarea
        className={styles.textArea}
        placeholder={placeHolder}
        rows={4}
        cols={50}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
