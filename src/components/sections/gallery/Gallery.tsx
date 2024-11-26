import Image from "next/image";
import pic1 from "./../../../../public/imgs/gallery-01.png";
import pic2 from "./../../../../public/imgs/gallery-02.png";
import pic3 from "./../../../../public/imgs/gallery-03.jpg";
import pic4 from "./../../../../public/imgs/gallery-04.png";
import pic5 from "./../../../../public/imgs/gallery-05.jpg";
import pic6 from "./../../../../public/imgs/gallery-06.png";

const gallery = [pic1, pic2, pic3, pic4, pic5, pic6];

import styles from "./gallery.module.css";

const Gallery = () => {
  return (
    <section id="gallery" className={styles.section}>
      <div className="container main-section-padding">
        <h1 className="section-main-title">Gallery</h1>
        <ul className={styles.gallery}>
          {gallery.map((pic, idx) => (
            <li key={idx} className={styles.pic}>
              <Image src={pic} alt="gallery" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
