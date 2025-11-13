import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message = "Error al cargar los datos" }) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.icon}>⚠️</div>
      <h3 className={styles.title}>Oops! Algo salió mal</h3>
      <p className={styles.message}>{message}</p>
      <button 
        className={styles.retryButton}
        onClick={() => window.location.reload()}
      >
        Reintentar
      </button>
    </div>
  );
};

export default ErrorMessage;