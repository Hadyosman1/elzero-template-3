import { PiMoneyWavyBold } from "react-icons/pi";
import { BiWorld } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

import styles from "./stats.module.css";

const stats = [
  { name: "Clients", num: 150, icon: <FaRegUser /> },
  { name: "Projects", num: 135, icon: <FaCode /> },
  { name: "Countries", num: 50, icon: <BiWorld /> },
  { name: "Money", num: 500, icon: <PiMoneyWavyBold /> },
];

const Stats = () => {
  return (
    <section className={styles.section} id="stats">
      <div className="container main-section-padding">
        <h2 className={styles.heading}>Our Awesome Stats</h2>

        <ul className={styles.stats}>
          {stats.map((stat) => (
            <li key={stat.name}>
              {stat.icon}
              <p>{stat.num}</p>
              <i>{stat.name}</i>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Stats;
