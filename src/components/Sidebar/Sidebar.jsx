import styles from "./Sidebar.module.css";
import { WiCloudy, WiStrongWind } from "react-icons/wi";
import { FaMapMarkedAlt, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        <img 
          src="/iconweatherly.svg" 
          alt="Weatherly" 
          className={styles.logoIcon}
        />
      </div>

      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <WiCloudy className={styles.menuIcon} />
        </li>
        <li className={styles.menuItem}>
          <WiStrongWind className={styles.menuIcon} />
        </li>
        <li className={styles.menuItem}>
          <FaMapMarkedAlt className={styles.menuIcon} />
        </li>
      </ul>

      <div className={styles.settings}>
        <FaCog className={styles.settingsIcon} />
      </div>
    </nav>
  );
};

export default Sidebar;