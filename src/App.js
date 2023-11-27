import {
  Button,
  Footer,
  Header,
  InputField,
  Item,
  ItemTrip,
} from "./components";
import styles from "./app.module.scss";
import bg from "./access/bg.jpeg";
import video from "./access/video1.mp4";
import { Icons } from "./ultils/icon";
import { useEffect, useState } from "react";
import { list, list1, list2, list3 } from "./ultils/data";
import { Parallax } from "react-parallax";

const { IoSearchSharp, MdDateRange, LuArrowDownUp } = Icons;
function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 550) {
        setShow(true);
      }
      if (window.scrollY <= 70) {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);
  return (
    <div className={styles.all}>
      {show && (
        <div className={styles.show}>
          <Header bg />
        </div>
      )}
      <div className={styles.app}>
        <div className={styles.bg}>
          <Parallax bgImage={bg} bgImageAlt="the dog" strength={-200}>
            <div className={styles.im} />
          </Parallax>
        </div>
        <div className={styles.app__header}>
          <Header />
        </div>
        <div className={styles.content}>
          <h2>Where do you want to go?</h2>
          <p>Trips, experiences, and places. All in one service.</p>
          <section className={styles.field}>
            <div className={styles.field_child}>
              <InputField
                type={"text"}
                IcAfter={IoSearchSharp}
                text={"Destination, city"}
              />
            </div>
            <div className={styles.field_child}>
              <InputField
                className={styles.field_child}
                type={"text"}
                text={"Any Month"}
                IcAfter={MdDateRange}
              />
            </div>
            <div className={styles.field_child}>
              <InputField
                className={styles.field_child}
                type={"text"}
                text={"Sort by Date"}
                IcAfter={LuArrowDownUp}
              />
            </div>
            <div className={styles.field_child}>
              <Button className={styles.field_child} title={"Search"} />
            </div>
          </section>
        </div>
      </div>
      <div className="">
        <div className={styles.sestion}>
          <div className={styles.section__child}>
            <h2>Popular Destinations</h2>
            <p>World's best tourist destinations</p>
          </div>
          <nav>
            {list?.map((item) => (
              <div key={item?.id} className={styles.items}>
                <Item title={item?.title} img={item?.img} />
              </div>
            ))}
          </nav>
        </div>
        <div className={styles.sestion}>
          <div className={styles.section__child}>
            <h2 className={styles.diff}>Best Value Trips</h2>
            <p>Best offers trips from us</p>
          </div>
          <nav>
            {list1?.map((item) => (
              <div key={item?.id} className={styles.itemtrip}>
                <ItemTrip
                  date={""}
                  title={item?.title}
                  img={item?.img}
                  text={item?.text}
                  price={item?.price}
                  star={item?.star}
                  review={item?.review}
                  time={item?.time}
                  sale={item?.sale}
                />
              </div>
            ))}
          </nav>
        </div>
        <div className={styles.sestion}>
          <div className={styles.section__child}>
            <h2>Why Choose Us</h2>
            <p>Here are reasons you should plan trip with us</p>
          </div>
          <nav>
            {list2?.map((item) => (
              <div key={item?.id} className={styles.itemss}>
                <Item title={item?.title} img={item?.img} text={item?.text} />
              </div>
            ))}
          </nav>
        </div>
        <div className={styles.bg_all}>
          <div className={styles.b}>
            <Parallax
              // blur={{ min: -15, max: 15 }}
              bgImage={
                "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg"
              }
              bgImageAlt="the dog"
              strength={-200}
            >
              Blur transition from min to max
              <div style={{ height: "400px" }} />
            </Parallax>
          </div>
        </div>
        <div className={styles.sestion}>
          <div className={styles.section__child}>
            <h2>Articles & Tips</h2>
            <p>Explore some of the best tips from around the world</p>
          </div>
          <nav>
            {list3?.map((item) => (
              <div key={item?.id} className={styles.itemtrip}>
                <ItemTrip
                  title={item?.title}
                  img={item?.img}
                  text={item?.text}
                  sale={""}
                  date={item?.date}
                />
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
