import { memo } from "react";
import styles from "./list.module.scss";
function List({ list }) {
  return (
    <div className={styles.container}>
      {list?.map((item, index) => (
        <h2 key={index}>{item?.value}</h2>
      ))}
    </div>
  );
}

export default memo(List);
