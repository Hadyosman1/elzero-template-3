import Image from "next/image";

import cover from "./../../../../public/imgs/video-preview.jpg";

import { FaRandom } from "react-icons/fa";

import styles from "./videos.module.css";

const videos = [
  { name: "How To Create Sub Domain", duration: "05:18" },
  { name: "Playing With The DNS", duration: "03:18" },
  { name: "Everything About The Virtual Hosts", duration: "06:18" },
  { name: "How To Monitor Your Website", duration: "04:28" },
  { name: "Uncharted Beating The Last Boss", duration: "05:18" },
  { name: "Ys Oath In Felghana Overview", duration: "03:05" },
  { name: "Ys Series All Games Ending", duration: "08:10" },
];

const Videos = () => {
  return (
    <section id="videos">
      <div className="container main-section-padding">
        <h2 className="section-main-title">Top Videos</h2>

        <div className={styles.top_videos_container}>
          <div className={styles.left}>
            <div className={styles.top_videos}>
              <p>Top Videos</p>
              <FaRandom />
            </div>

            <ul className={styles.videos_list}>
              {videos.map((vid) => (
                <li key={vid.name}>
                  <p>{vid.name}</p>
                  <span>{vid.duration}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.right}>
            <div className={styles.video_cover}>
              <Image
                src={cover}
                alt="video cover"
                sizes="(max-width: 991px) 500px ,(min-width: 992px) 850px"
              />
            </div>

            <p>Everything About The Virtual Hosts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
