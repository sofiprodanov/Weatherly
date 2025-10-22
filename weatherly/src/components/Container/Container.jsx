import styles from "./Container.module.css";

// #TODO: REVISAR FUNCIONAMIENTO DE CHILDREN, COMPARAR
function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
