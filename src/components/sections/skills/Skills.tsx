"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import skillsPic from "./../../../../public/imgs/skills.png";

import styles from "./skills.module.css";

const skills = [
  { name: "Html", rate: 80 },
  { name: "css", rate: 80 },
  { name: "Javascript", rate: 75 },
  { name: "React", rate: 80 },
];

const Skills = () => {
  const [isInterSecting, setIsInterSecting] = useState(false);
  const skillsRef = useRef<HTMLUListElement>(null);

  const handleFillProgress = () => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInterSecting(true);
            if (skillsRef.current) observer.unobserve(skillsRef.current);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
  };

  useEffect(() => {
    handleFillProgress();
  }, []);

  return (
    <section id="skills">
      <div className="container main-section-padding">
        <h2 className="section-main-title">Our Skills</h2>

        <div className={styles.skills}>
          <div>
            <Image src={skillsPic} alt="skills" />
          </div>

          <ul ref={skillsRef} className={styles.skill_list}>
            {skills.map((skill, idx) => (
              <li className={styles.skill} key={idx}>
                <p>{skill.name}</p>
                <div className={styles.skill_progress_wrapper}>
                  <span
                    className={styles.fill_progress}
                    style={{ width: `${isInterSecting ? skill.rate : 0}%` }}
                  />
                  <span className={styles.rate}>{skill.rate}%</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
