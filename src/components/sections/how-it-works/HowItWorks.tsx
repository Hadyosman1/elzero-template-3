import Image from "next/image";

import howItWorksPic from "./../../../../public/imgs/work-steps.png";
import work1 from "./../../../../public/imgs/work-steps-1.png";
import work2 from "./../../../../public/imgs/work-steps-2.png";
import work3 from "./../../../../public/imgs/work-steps-3.png";

import styles from "./how-it-works.module.css";

const works = [
  { name: "Business Analysis", img: work1 },
  { name: "Architecture", img: work2 },
  { name: "Development", img: work3 },
];

const HowItWorks = () => {
  return (
    <section className={styles.section} id="how-it-works">
      <div className="container main-section-padding">
        <h2 className="section-main-title">how it works</h2>

        <div className={styles.how_it_works}>
          <div className={styles.image}>
            <Image src={howItWorksPic} alt="how it works" width={400} />
          </div>

          <ul>
            {works.map((work, idx) => (
              <li key={idx}>
                <Image src={work.img} alt={work.name} width={60} height={60} />
                <div>
                  <h3>{work.name}</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Enim nesciunt obcaecati quisquam quis laborum recusandae
                    debitis vel
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
