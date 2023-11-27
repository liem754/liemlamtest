import { memo } from "react";
import { formatStar } from "../../ultils/format";
import { Icons } from "../../ultils/icon";
import styles from "./itemTrip.module.scss";
const { IoTimeOutline, FaAngleRight } = Icons;
function ItemTrip({ img, title, text, star, review, time, price, sale, date }) {
  return (
    <div className={styles.container}>
      <img src={img} alt="" />
      {sale !== "" && <div className={styles.sale}>Sale</div>}
      {sale !== "" && date === "" ? (
        <div className={styles.price}>
          <span>{sale}</span>
          <span>{price}</span>
        </div>
      ) : sale === "" && date === "" ? (
        <div className={styles.price}>{price}</div>
      ) : (
        <div className=""></div>
      )}
      <div className={styles.child}>
        {date && <h3>{date}</h3>}
        <h2>{title}</h2>
        <p>{text}</p>
        {date ? (
          <div className={styles.read}>
            <h2>Read more</h2>
            <p>
              <FaAngleRight />
            </p>
          </div>
        ) : (
          <div className={styles.star}>
            <h2>
              <span>{formatStar(star)}</span>
              <span>{`${review} review`}</span>
            </h2>
            <h2>
              <p>
                <IoTimeOutline />
              </p>
              <span>{`${time} days`}</span>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(ItemTrip);
