import styles from "./footer.module.scss";
import award from "../../access/awards.png";
import { Icons } from "../../ultils/icon";
import { list4 } from "../../ultils/data";
const {
  MdOutlinePhoneAndroid,
  IoLocationOutline,
  MdOutlineTimer,
  TfiYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} = Icons;
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.all}>
        <div className={styles.child_top}>
          <section>
            <h2>Our Awards</h2>
            <span>
              London is a megalopolis of people, ideas and frenetic energy. The
              capital and largest city of the United Kingdom.
            </span>
            <img src={award} alt="" />
          </section>
          <section>
            <h2>Contact Info</h2>
            <ul>
              <li>
                <h3>
                  <MdOutlinePhoneAndroid />
                </h3>
                <h3>1-567-124-44227</h3>
              </li>
              <li>
                <h3>
                  <IoLocationOutline />
                </h3>
                <h3>184 Main Street East Perl Habour 8007</h3>
              </li>
              <li>
                <h3>
                  <MdOutlineTimer />
                </h3>
                <h3>Mon - Sat 8.00 - 18.00 Sunday CLOSED</h3>
              </li>
            </ul>
            <div className={styles.media}>
              <div className={styles.fb}>
                <FaFacebookF />
              </div>
              <div className={styles.tw}>
                <FaTwitter />
              </div>
              <div className={styles.yt}>
                <TfiYoutube />
              </div>
              <div className={styles.pin}>
                <FaPinterestP />
              </div>
              <div className={styles.in}>
                <FaInstagram />
              </div>
            </div>
          </section>
          <section>
            <h2>Recent Trips</h2>
            <div className={styles.trip}>
              {list4?.map((item) => (
                <img key={item.id} src={item.img} alt="" />
              ))}
            </div>
          </section>
        </div>
        <div className={styles.child_bot}>
          <h2>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</h2>
          <nav className="">
            <h3>Home</h3>
            <h3>Tours</h3>

            <h3>Blog</h3>

            <h3>Purchase Theme</h3>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
