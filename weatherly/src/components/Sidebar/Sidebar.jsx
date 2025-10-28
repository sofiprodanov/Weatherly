import styles from "./Sidebar.module.css";
import { WiDaySunny, WiCloudy, WiStrongWind } from "react-icons/wi";
import { FaMapMarkedAlt, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        <WiDaySunny size={36} />
      </div>

      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <WiCloudy size={28} />
        </li>
        <li className={styles.menuItem}>
          <WiStrongWind size={28} />
        </li>
        <li className={styles.menuItem}>
          <FaMapMarkedAlt size={22} />
        </li>
      </ul>

      <div className={styles.settings}>
        <FaCog size={22} />
      </div>
    </nav>
  );
};

export default Sidebar;
