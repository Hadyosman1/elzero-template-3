import Image from "next/image";

import feature1pic from "./../../../../public/imgs/features-01.jpg";
import feature2pic from "./../../../../public/imgs/features-02.jpg";
import feature3pic from "./../../../../public/imgs/features-03.jpg";

import styles from "./features.module.css";

const features = [
  { img: feature1pic, name: "quality", color: "#f44036" },
  { img: feature2pic, name: "time", color: "#009688" },
  { img: feature3pic, name: "passion", color: "#03a9f4" },
];

const Features = () => {
  return (
    <section id="features">
      <div className="container main-section-padding">
        <h2 className="section-main-title">Features</h2>
        <div className={styles.features}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.card}>
              <div>
                <Image src={feature.img} alt="feature" />
                <div
                  style={{ background: feature.color }}
                  className={styles.img_overlay}
                />
              </div>
              <div>
                <h3>
                  {feature.name}
                  <span style={{ background: feature.color }} />
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  harum hic veniam eligendi minima
                </p>
                <div>
                  <button
                    style={{
                      color: feature.color,
                      borderColor: feature.color,
                      border: "2px solid",
                    }}
                  >
                    More
                  </button>
                  <span style={{ background: feature.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
