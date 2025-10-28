import styles from "./HourlyForecast.module.css";
import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";
import { forecastMock } from "../../data/forecastMock";

const HourlyForecast = () => {
  const renderIcon = (icon) => {
    switch (icon) {
      case "cloudy":
        return <WiCloudy size={40} color="#38bdf8" />;
      case "rain":
        return <WiRain size={40} color="#38bdf8" />;
      default:
        return <WiDaySunny size={40} color="#facc15" />;
    }
  };

  return (
    <section className={styles.hourlyForecast}>
      <h3 className={styles.title}>Pronóstico por hora</h3>
      <div className={styles.list}>
        {forecastMock.map((hourData, index) => (
          <div key={index} className={styles.item}>
            <p className={styles.hour}>{hourData.hour}</p>
            {renderIcon(hourData.icon)}
            <p className={styles.temp}>{hourData.temperature}°</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HourlyForecast;
