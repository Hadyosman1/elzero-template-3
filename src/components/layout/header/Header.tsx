import Link from "next/link";
import Image from "next/image";

import megaPic from "./../../../../public/imgs/megamenu.png";

// Icons
import { FaRegComments } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaServerSolid } from "react-icons/lia";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoStatsChartOutline } from "react-icons/io5";
import { AiOutlinePercentage } from "react-icons/ai";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container relative">
        <nav className={styles.nav}>
          <Link className={styles.logo} href={"/"}>
            Elzero
          </Link>

          <ul className={styles.links}>
            <li>
              <a className={styles.nav_link} href="#articles">
                Articles
              </a>
            </li>
            <li>
              <a className={styles.nav_link} href="#gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className={styles.nav_link} href="#features">
                Features
              </a>
            </li>
            <li>
              <a className={styles.nav_link} href="#">
                Other Links
              </a>
              <div className={`${styles.mega_menu} container`}>
                <div className={styles.mega_menu_image_wrapper}>
                  <Image src={megaPic} alt="mega" unoptimized/>
                </div>

                <ul>
                  <li>
                    <a href="#testimonials">
                      <FaRegComments />
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FiUser />
                      Team Members
                    </a>
                  </li>
                  <li>
                    <a href="#services">
                      <FaRegBuilding />
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#skills">
                      <AiOutlineCheckCircle />
                      Our Skills
                    </a>
                  </li>
                  <li>
                    <a href="#how-it-works">
                      <HiOutlineClipboardDocumentList />
                      How It Works
                    </a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="#events">
                      <IoCalendarOutline />
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#pricing">
                      <LiaServerSolid />
                      Pricing Plans
                    </a>
                  </li>
                  <li>
                    <a href="#videos">
                      <IoPlayCircleOutline />
                      Top Videos
                    </a>
                  </li>
                  <li>
                    <a href="#stats">
                      <IoStatsChartOutline />
                      Stats
                    </a>
                  </li>
                  <li>
                    <a href="#skills">
                      <AiOutlinePercentage />
                      Request A Discount
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
