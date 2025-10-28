import styles from "./WeeklyForecast.module.css";
import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";
import { weeklyForecastMock } from "../../data/weeklyForecastMock";

const WeeklyForecast = () => {
  const renderIcon = (icon) => {
    switch (icon) {
      case "cloudy":
        return <WiCloudy size={36} color="#38bdf8" />;
      case "rain":
        return <WiRain size={36} color="#38bdf8" />;
      default:
        return <WiDaySunny size={36} color="#facc15" />;
    }
  };

  return (
    <section className={styles.weeklyForecast}>
      <h3 className={styles.title}>Próximos 7 días</h3>
      <div className={styles.list}>
        {weeklyForecastMock.map((dayData, index) => (
          <div key={index} className={styles.item}>
            <p className={styles.day}>{dayData.day}</p>
            {renderIcon(dayData.icon)}
            <p className={styles.temp}>
              {dayData.max}° / <span>{dayData.min}°</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklyForecast;
