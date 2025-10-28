import styles from "./Navbar.module.css";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.searchContainer}>
        <FiSearch className={styles.icon} />
        <input
          type="text"
          placeholder="Buscar provincia o localidad..."
          className={styles.input}
        />
      </div>
    </header>
  );
};

export default Navbar;
