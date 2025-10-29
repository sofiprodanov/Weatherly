import styles from "./WeatherMain.module.css";
import { citiesMock } from "../../data/citiesMock";
import { SunnyIcon, CloudyIcon, RainyIcon, WindyIcon } from "./icons";

const WeatherMain = () => {
  const weatherData = citiesMock[4];

  const renderWeatherIcon = (icon) => {
    switch (icon) {
      case "cloudy":
        return <CloudyIcon />;
      case "rain":
        return <RainyIcon />;
      case "windy":
        return <WindyIcon />;
      default:
        return <SunnyIcon />;
    }
  };

  return (
    <section className={styles.weatherMain}>
      <div className={styles.top}>
        <h2 className={styles.city}>
          {weatherData.city}, {weatherData.province}
        </h2>
        <p className={styles.condition}>{weatherData.condition}</p>
      </div>

      <div className={styles.bottom}>
        <span className={styles.temperature}>{weatherData.temperature}°</span>
        <div className={styles.icon}>
          {renderWeatherIcon(weatherData.icon)}
        </div>
      </div>
    </section>
  );
};

export default WeatherMain;