import styles from "./WeatherCard.module.css";
import { WiDaySunny, WiCloudy, WiRain, WiStrongWind } from "react-icons/wi";

const WeatherCard = ({ city, province, temperature, condition, icon }) => {
  const renderIcon = (icon) => {
    switch (icon) {
      case "cloudy":
        return <WiCloudy size={50} color="#38bdf8" />;
      case "rain":
        return <WiRain size={50} color="#38bdf8" />;
      case "windy":
        return <WiStrongWind size={50} color="#38bdf8" />;
      default:
        return <WiDaySunny size={50} color="#facc15" />;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{city}</h3>
        <p className={styles.province}>{province}</p>
      </div>

      <div className={styles.body}>
        {renderIcon(icon)}
        <span className={styles.temperature}>{temperature}°</span>
      </div>

      <p className={styles.condition}>{condition}</p>
    </div>
  );
};

export default WeatherCard;
