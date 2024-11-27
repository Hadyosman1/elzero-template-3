import { IoIosHeart } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

import gallery1 from "./../../../../public/imgs/gallery-01.png";
import gallery2 from "./../../../../public/imgs/gallery-02.png";
import gallery3 from "./../../../../public/imgs/gallery-03.jpg";
import gallery4 from "./../../../../public/imgs/gallery-04.png";
import gallery5 from "./../../../../public/imgs/gallery-05.jpg";
import gallery6 from "./../../../../public/imgs/gallery-06.png";

import styles from "./footer.module.css";
import Image from "next/image";

const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div
        className={`${styles.footer_container} container main-section-padding`}
      >
        <div className={styles.one}>
          <h2>Elzero</h2>
          <ul className={styles.socials}>
            <li className={styles.facebook}>
              <FaFacebookF />
            </li>
            <li className={styles.youtube}>
              <FaYoutube />
            </li>
            <li className={styles.twitter}>
              <FaTwitter />
            </li>
          </ul>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nulla rem, dignissimos iste aspernatur
          </p>
        </div>
        <ul className={styles.two}>
          <li>
            <MdDoubleArrow />
            important link 1
          </li>
          <li>
            <MdDoubleArrow />
            important link 2
          </li>
          <li>
            <MdDoubleArrow />
            important link 3
          </li>
          <li>
            <MdDoubleArrow />
            important link 4
          </li>
          <li>
            <MdDoubleArrow />
            important link 5
          </li>
        </ul>
        <ul className={styles.three}>
          <li>
            <FaLocationDot />
            Egypt, Giza, Inside The Sphinx, Room Number 220
          </li>
          <li>
            <FaClock />
            Business Hours: From 10:00 To 18:00
          </li>
          <li>
            <BsFillTelephoneFill />
            <div>
              <span>+20123456789</span>
              <span>+20198765432</span>
            </div>
          </li>
        </ul>
        <ul className={styles.four}>
          {gallery.map((pic, idx) => (
            <li key={idx}>
              <Image
                src={pic}
                alt={`gallery ${idx + 1}`}
                width={70}
                height={70}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className={`${styles.made_with} `}>
        Made With
        <span style={{ color: "red" }}>
          <IoIosHeart />
        </span>
        By Hady Osman
      </div>
    </footer>
  );
};

export default Footer;
