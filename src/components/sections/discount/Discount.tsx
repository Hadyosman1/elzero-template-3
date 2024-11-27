"use client";

import Image from "next/image";

import discountPic from "./../../../../public/imgs/discount.png";

import styles from "./discount.module.css";

const Discount = () => {
  return (
    <section id="discount">
      <div className={`${styles.section}  `}>
        <div className={`${styles.left} main-section-padding`}>
          <h3>We Have A Discount</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            asperiores consectetur, recusandae ratione provident necessitatibus,
            cumque delectus commodi fuga praesentium beatae. Totam vel similique
            laborum dicta aperiam odit doloribus corporis.
          </p>

          <Image src={discountPic} alt="Discount" width={300} height={300} />
        </div>
        <div className={`${styles.right} main-section-padding`}>
          <h3>Request A Discount</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Your Phone" />
            <textarea placeholder="Tell Us About Your Needs" />
            <button>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Discount;
