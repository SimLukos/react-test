import styles from "./input.module.css";

export default function Input({ placeHolder, type, value, onChange }) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        className={styles.input}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}
