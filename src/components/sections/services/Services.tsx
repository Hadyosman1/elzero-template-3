import { MdAdminPanelSettings } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { HiOutlineSpeakerphone } from "react-icons/hi";

import styles from "./services.module.css";

const services = [
  { name: "Security", icon: <MdAdminPanelSettings /> },
  { name: "Fixing Issues", icon: <FaTools /> },
  { name: "Location", icon: <FaMapLocationDot /> },
  { name: "Coding", icon: <FaLaptopCode /> },
  { name: "Design", icon: <IoIosColorPalette /> },
  { name: "Marketing", icon: <HiOutlineSpeakerphone /> },
];

const Services = () => {
  return (
    <section className={styles.section} id="services">
      <div className="container main-section-padding">
        <h2 className="section-main-title">Services</h2>

        <ul className={styles.service_list}>
          {services.map((service, idx) => (
            <li className={styles.service_box} key={idx}>
              <div>
                {service.icon}
                <h3>{service.name}</h3>
              </div>
              <div>
                <p>0{idx + 1}</p>
                <a href="#">Details</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
