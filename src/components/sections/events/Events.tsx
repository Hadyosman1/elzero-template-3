"use client";

import Image from "next/image";
import dotsPic from "./../../../../public/imgs/dots.png";
import eventsPic from "./../../../../public/imgs/events.png";

import styles from "./events.module.css";

const Events = () => {
  return (
    <section id="events">
      <div style={{ paddingTop: "100px" }}>
        <h2 className="section-main-title">Latest Events</h2>
      </div>

      <div className={styles.section}>
        <div className={styles.dots_image_wrapper_right}>
          <Image src={dotsPic} alt="dots shape" />
        </div>
        <div className={styles.dots_image_wrapper_left}>
          <Image src={dotsPic} alt="dots shape" />
        </div>

        <div className={`container main-section-padding`}>
          <div className={styles.events}>
            <div>
              <Image unoptimized src={eventsPic} alt="events" width={400} />
            </div>
            <div>
              <div className={styles.date_wrapper}>
                <div>
                  <p>333</p>
                  <span>Days</span>
                </div>
                <div>
                  <p>12</p>
                  <span>Hours</span>
                </div>
                <div>
                  <p>22</p>
                  <span>Minutes</span>
                </div>
                <div>
                  <p>333</p>
                  <span>seconds</span>
                </div>
              </div>
              <h3>Tech Masters Event 2023</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
                tenetur doloremque iusto ut adipisci quam ratione aliquam
                excepturi nulla in harum, veritatis porro
              </p>
            </div>
          </div>

          <div className={styles.input_wrapper}>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
