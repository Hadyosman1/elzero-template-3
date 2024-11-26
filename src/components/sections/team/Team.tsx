import Image from "next/image";
import team1pic from "./../../../../public/imgs/team-01.jpg";
import team2pic from "./../../../../public/imgs/team-02.jpg";
import team3pic from "./../../../../public/imgs/team-03.jpg";
import team4pic from "./../../../../public/imgs/team-04.jpg";
import team5pic from "./../../../../public/imgs/team-05.png";
import team6pic from "./../../../../public/imgs/team-06.png";
import team7pic from "./../../../../public/imgs/team-07.jpg";
import team8pic from "./../../../../public/imgs/team-08.jpg";

import { FaFacebookF } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import styles from "./team.module.css";

const teamMembers = [
  team1pic,
  team2pic,
  team3pic,
  team4pic,
  team5pic,
  team6pic,
  team7pic,
  team8pic,
];

const Team = () => {
  return (
    <section>
      <div className="container main-section-padding">
        <h2 className="section-main-title">Team Members</h2>

        <ul className={styles.team_member_list}>
          {teamMembers.map((memberPic, idx) => (
            <li className={styles.team_card} key={idx}>
              <div className={styles.socials}>
                <div className={styles.image}>
                  <Image
                    src={memberPic}
                    alt="Team Member"
                    width={300}
                    height={280}
                  />
                </div>

                <div>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <TiSocialTwitter />
                  </a>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </div>
              </div>

              <div className={styles.content_card}>
                <h3>Name</h3>
                <p>Simple Short Description</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
