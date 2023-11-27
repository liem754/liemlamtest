import styles from "./header.module.scss";
import logo from "../../access/logo@2x_white.png";
import logo1 from "../../access/logo@2x.png";
import { Icons } from "../../ultils/icon";
import { useState } from "react";
import List from "../list";
import clsx from "clsx";
import { list, list5, list6 } from "../../ultils/data";
import { formatStar } from "../../ultils/format";
const { FaChevronDown, IoMenu, RiShoppingCartLine, IoClose } = Icons;
const listt = [
  "Home",
  "Tours",
  "Booking",
  "Destination",
  "Pages",
  "Blog",
  "ShortCode",
  "Shop",
];
function Header({ bg }) {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className={clsx(styles.container, bg && "bg-white border-b pd")}>
      <div className={clsx(styles.container__child, bg && "text-black")}>
        {show && (
          <div className={styles.all_show}>
            <div className={styles.show}>
              <nav onClick={() => setShow(false)}>
                <h2>
                  <IoClose />
                </h2>
              </nav>
              <nav>
                {listt.map((item, index) => (
                  <h2 key={index}>{item}</h2>
                ))}
              </nav>
              <nav>
                {list5.map((item, index) => (
                  <div key={index} className={styles.el}>
                    <img src={item?.img} alt="" />
                    <div className={styles.str}>
                      <h3>{item?.price}</h3>

                      <h2>{item?.title}</h2>
                      <h1>{formatStar(item?.star)}</h1>
                    </div>
                  </div>
                ))}
              </nav>
              <nav>
                {list6.map((item, index) => (
                  <div key={index} className={styles.el}>
                    {item.icon}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
        <nav>
          <img
            src={bg ? logo1 : logo}
            alt=""
            className={clsx(bg && "text-black")}
          />
        </nav>
        <nav className={clsx(styles.nav2, bg && styles.neww)}>
          <ul className={clsx(styles.list, bg && "mr0")}>
            <li>
              <span className={bg ? "notext-shadow" : "t-shadow"}>Home</span>
              <FaChevronDown className="icon" size={"10px"} />
              <div className={styles.hove}>
                <List
                  list={[
                    {
                      id: 1,
                      value: "Home 1",
                    },
                    {
                      id: 2,
                      value: "Home 2",
                    },
                    {
                      id: 3,
                      value: "Home 3",
                    },
                    {
                      id: 4,
                      value: "Home 4",
                    },
                  ]}
                />
              </div>
            </li>

            <li>
              <span className={bg ? "notext-shadow" : "t-shadow"}>Tours</span>
              <FaChevronDown className="icon" size={"10px"} />
              <div className={styles.hove}>
                <List
                  list={[
                    {
                      id: 1,
                      value: "Tours classic Fullwidth",
                    },
                    {
                      id: 2,
                      value: "Tours classic Sidebar",
                    },
                    {
                      id: 3,
                      value: "Tours Grid Fullwidth",
                    },
                    {
                      id: 4,
                      value: "Tours Grid Siderbar",
                    },
                    {
                      id: 5,
                      value: "Tours List Siderbar",
                    },
                    {
                      id: 6,
                      value: "Tours Header Type",
                    },
                  ]}
                />
              </div>
            </li>
            <li>
              <span className={bg ? "notext-shadow" : "t-shadow"}>Booking</span>
              <FaChevronDown className="icon" size={"10px"} />
              <div className={styles.hove}>
                <List
                  list={[
                    {
                      id: 1,
                      value: "Online Payment For Booking",
                    },
                    {
                      id: 2,
                      value: "Custom Booking Form",
                    },
                    {
                      id: 3,
                      value: "Tours Durations",
                    },
                    {
                      id: 4,
                      value: "Custom Booking Form URL For Affiliate Tour",
                    },
                    {
                      id: 5,
                      value: "Headers Option",
                    },
                    {
                      id: 6,
                      value: "Layout Option",
                    },
                  ]}
                />
              </div>
            </li>
            <li>
              {" "}
              <span className={bg ? "notext-shadow" : "t-shadow"}>
                Destination
              </span>
              <FaChevronDown className="icon" size={"10px"} />
              <div className={styles.hove}>
                <List
                  list={[
                    {
                      id: 1,
                      value: "Destinations FullWidth",
                    },
                    {
                      id: 2,
                      value: "Destinations + Video Header",
                    },
                    {
                      id: 3,
                      value: "Destinations Right Sidabar",
                    },
                    {
                      id: 4,
                      value: "Destinations Left Sidabar",
                    },
                    {
                      id: 5,
                      value: "Single Destination",
                    },
                    {
                      id: 6,
                      value: "Single Destination",
                    },
                  ]}
                />
              </div>
            </li>
            <li>
              {" "}
              <span className={bg ? "notext-shadow" : "t-shadow"}>Pages</span>
              <FaChevronDown className="icon" size={"10px"} />
              <div className={styles.hove}>
                <List
                  list={[
                    {
                      id: 1,
                      value: "About us",
                    },
                    {
                      id: 2,
                      value: "Contact us",
                    },
                    {
                      id: 3,
                      value: "FAQs",
                    },
                    {
                      id: 4,
                      value: "Gallery",
                    },
                    {
                      id: 5,
                      value: "Page FullWidth",
                    },
                    {
                      id: 6,
                      value: "Page Right Sidebar",
                    },
                    {
                      id: 7,
                      value: "Page Left Sidebar",
                    },
                  ]}
                />
              </div>
            </li>
            <li>
              {" "}
              <span className={bg ? "notext-shadow" : "t-shadow"}>Blogs</span>
              <FaChevronDown className="icon" size={"10px"} />
              <div className={styles.hove}>
                <List
                  list={[
                    {
                      id: 1,
                      value: "Blog FullWidth",
                    },
                    {
                      id: 2,
                      value: "Blog Right Sidebar",
                    },
                    {
                      id: 3,
                      value: "Blog Left Sidebar",
                    },
                    {
                      id: 4,
                      value: "Blog Grid FullWidth",
                    },
                    {
                      id: 5,
                      value: "Blog Grid Right Sidebar",
                    },
                    {
                      id: 6,
                      value: "Blog Grid Right Sidebar",
                    },
                  ]}
                />
              </div>
            </li>
            <li>
              <span className={bg ? "notext-shadow" : "t-shadow"}>
                ShortCodes
              </span>
              <FaChevronDown className="icon" size={"10px"} />
              <div className={styles.hove}>
                <List
                  list={[
                    {
                      id: 1,
                      value: "Accordion & Toggles",
                    },
                    {
                      id: 2,
                      value: "Alert Boxes",
                    },
                    {
                      id: 3,
                      value: "Animated Content",
                    },
                    {
                      id: 4,
                      value: "Button & Social Icons",
                    },
                    {
                      id: 5,
                      value: "Colunms",
                    },
                    {
                      id: 6,
                      value: "Google Maps",
                    },
                    {
                      id: 7,
                      value: "Image Table",
                    },
                  ]}
                />
              </div>
            </li>
            <li>
              <span className={bg ? "notext-shadow" : "t-shadow"}>Shops</span>
              <FaChevronDown className="icon" size={"10px"} />
              <div className={styles.hove}>
                <List
                  list={[
                    {
                      id: 1,
                      value: "Shop FullWidth",
                    },
                    {
                      id: 2,
                      value: "Shop Sidebar",
                    },
                    {
                      id: 3,
                      value: "Siggle Product FullWidth",
                    },
                    {
                      id: 4,
                      value: "Siggle Product For SideBar",
                    },
                  ]}
                />
              </div>
            </li>
          </ul>
          <div onClick={() => setShow(true)} className={styles.kip}>
            <h2 className={styles.topp}>
              <IoMenu />
            </h2>
            <h2>
              <RiShoppingCartLine />

              <div className={styles.cart}>0</div>
            </h2>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
