import { memo } from "react";
import styles from "./item.module.scss";
import clsx from "clsx";
function Item({ img, title, text }) {
  return (
    <div className={clsx(styles.container, text && styles.no)}>
      {text ? (
        <div className={styles.all}>
          <img
            src={img}
            alt=""
            className={clsx(styles.img, text && styles.img2)}
          />
        </div>
      ) : (
        <img
          src={img}
          alt=""
          className={clsx(styles.img, text && styles.img2)}
        />
      )}
      {text ? (
        <div className={styles.text}>
          <h2>{title}</h2>
          <h3>{text}</h3>
        </div>
      ) : (
        <h1>{title}</h1>
      )}
    </div>
  );
}

export default memo(Item);
