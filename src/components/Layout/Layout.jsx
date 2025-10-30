import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";

/**
 * Estructura principal de la web.
 * Contiene el Sidebar y el Navbar.
 * Muestra el contenido dinámico dentro de {children}.
 */

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebarContainer}>
        <Sidebar />
      </aside>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.navbarContainer}>
            <Navbar />
          </div>
          <div className={styles.logo}>
            <span className={styles.logoText}>Weatherly</span>
          </div>
        </div>
        <section className={styles.content}>{children}</section>
      </main>
    </div>
  );
};

export default Layout;