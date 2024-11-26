import Image from "next/image";
import heroPic from "./../../../../public/imgs/landing-image.png";

import { FaAnglesDown } from "react-icons/fa6";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.hero_container} container`}>
        <div className={styles.content}>
          <h1>Welcome, To Elzero World</h1>
          <p>
            Here Iam gonna share everything about my life. Books Iam reading,
            Games Iam Playing, Stories and Events
          </p>
        </div>
        <div className={styles.hero_img}>
          <Image
            priority
            unoptimized
            src={heroPic}
            alt="hero"
            width={600}
            height={380}
          />
        </div>
      </div>

      <a href="#articles" className={styles.go_down}>
        <FaAnglesDown />
      </a>
    </section>
  );
};

export default Hero;
