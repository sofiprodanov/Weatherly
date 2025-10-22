import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <h1 className={styles.logo}>Weather Web</h1>
      <nav>
        <ul className={styles.navList}>
          <li>Inicio</li>
          <li>Ciudades</li>
          <li>Favoritos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
