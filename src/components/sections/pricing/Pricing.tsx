import Image from "next/image";

import dotsPic from "./../../../../public/imgs/dots.png";
import basicPic from "./../../../../public/imgs/hosting-basic.png";
import advancedPic from "./../../../../public/imgs/hosting-advanced.png";
import professionalPic from "./../../../../public/imgs/hosting-professional.png";

import { PiSealCheckLight } from "react-icons/pi";

import styles from "./pricing.module.css";

const plans = [
  {
    name: "Basic",
    price: "$15",
    img: basicPic,
    features: [
      "10GB HDD Space",
      "5 Email Addresses",
      "2 Subdomains",
      "4 Databases",
      "Basic Support",
    ],
  },
  {
    name: "Advanced",
    price: "$25",
    img: advancedPic,
    mostPopular: true,
    features: [
      "20GB HDD Space",
      "10 Email Addresses",
      "5 Subdomains",
      "8 Databases",
      "Advanced Support",
    ],
  },
  {
    name: "Professional",
    price: "$45",
    img: professionalPic,
    features: [
      "50GB HDD Space",
      "20 Email Addresses",
      "10 Subdomains",
      "20 Databases",
      "Professional Support",
    ],
  },
];

const Pricing = () => {
  return (
    <section className={styles.section} id="pricing">
      <div style={{ paddingTop: "80px" }}>
        <h2 className="section-main-title">Pricing Plans</h2>
      </div>

      <div className={`${styles.main_container}`}>
        <div className={styles.dots_image_wrapper_right}>
          <Image src={dotsPic} alt="dots shape" />
        </div>
        <div className={styles.dots_image_wrapper_left}>
          <Image src={dotsPic} alt="dots shape" />
        </div>

        <div style={{ position: "relative" }} className="container ">
          <div className={styles.plan_list}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`${styles.plan_card} ${
                  plan.mostPopular ? styles.most_popular_card : ""
                }`}
              >
                {plan.mostPopular && (
                  <p className={styles.mostPopular}>most Popular</p>
                )}
                <div>
                  <h3>{plan.name}</h3>
                  <div className={styles.image_wrapper}>
                    <Image src={plan.img} alt={plan.name} width={75} />
                  </div>

                  <p className={styles.price}>{plan.price}</p>

                  <span className={styles.per_month}>Per Month</span>
                </div>
                <ul className={styles.feature_list}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <PiSealCheckLight />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={styles.choose_plan}>Choose Plan</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
