"use client";
import { useCallback, useEffect, useRef } from "react";

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

const handleStatNumber = () => {
  const targets = document.querySelectorAll("[data-stat-number]");

  targets.forEach((target) => {
    const element = target as HTMLElement;
    let start = 0;
    const end = parseInt(element.dataset.statNumber || "0");
    const interval = setInterval(() => {
      if (start >= end) clearInterval(interval);
      target.innerHTML = (start++).toString();
    }, 20);
  });
};

const Stats = () => {
  const sectionRef = useRef<HTMLUListElement>(null);

  const handleObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleStatNumber();
            if (sectionRef.current) observer.unobserve(sectionRef.current);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  useEffect(() => {
    handleObserver();
  }, [handleObserver]);

  return (
    <section className={styles.section} id="stats">
      <div className="container main-section-padding">
        <h2 className={styles.heading}>Our Awesome Stats</h2>

        <ul ref={sectionRef} className={styles.stats}>
          {stats.map((stat) => (
            <li key={stat.name}>
              {stat.icon}
              <p data-stat-number={stat.num}>{stat.num}</p>
              <i>{stat.name}</i>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Stats;
