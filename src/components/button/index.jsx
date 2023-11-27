import { memo } from "react";
import styles from "./button.module.scss";
function Button({ css, title, Click }) {
  return (
    <button className={styles.container}>
      <span>{title}</span>
    </button>
  );
}

export default memo(Button);
