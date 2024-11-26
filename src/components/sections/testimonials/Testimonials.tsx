import Image from "next/image";

import { FaStar as FilledStar } from "react-icons/fa";
import { FaRegStar as Star } from "react-icons/fa";

import test1 from "./../../../../public/imgs/avatar-01.png";
import test2 from "./../../../../public/imgs/avatar-02.png";
import test3 from "./../../../../public/imgs/avatar-03.png";
import test4 from "./../../../../public/imgs/avatar-04.png";
import test5 from "./../../../../public/imgs/avatar-05.png";
import test6 from "./../../../../public/imgs/avatar-06.png";

const testimonials = [
  {
    name: "Mohamed Farag",
    job: "Full Stack Developer",
    rating: 4,
    pic: test1,
  },
  {
    name: "Mohamed Ibrahim",
    job: "Full Stack Developer",
    rating: 4,
    pic: test2,
  },
  {
    name: "Shady Nabil",
    job: "Full Stack Developer",
    rating: 4,
    pic: test3,
  },
  {
    name: "Amr Hendawy",
    job: "Full Stack Developer",
    rating: 5,
    pic: test4,
  },
  {
    name: "Sherief Ashraf",
    job: "Full Stack Developer",
    rating: 3,
    pic: test5,
  },
  {
    name: "Osama Mohamed",
    job: "Full Stack Developer",
    rating: 3,
    pic: test6,
  },
];

import styles from "./testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles.testimonials_section} id="testimonials">
      <div className="container main-section-padding">
        <h2 className="section-main-title">Testimonials</h2>

        <ul className={styles.testimonial_list}>
          {testimonials.map((test, idx) => (
            <li key={idx} className={styles.testimonial_card}>
              <div className={styles.image_wrapper}>
                <Image src={test.pic} alt={test.name} width={90} height={90} />
              </div>
              <div className="content">
                <h4>{test.name}</h4>
                <h5>{test.job}</h5>
                <div>
                  {Array.from({ length: 5 }, (_, idx) => {
                    const starNumber = idx + 1;
                    if (starNumber <= test.rating) {
                      return (
                        <FilledStar className="filled-rating-star" key={idx} />
                      );
                    }
                    return <Star key={idx} />;
                  })}
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores et reiciendis voluptatum, amet est natus quaerat
                  ducimus
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
