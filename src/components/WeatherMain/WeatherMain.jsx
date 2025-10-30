import styles from "./WeatherMain.module.css";
import { SunnyIcon, CloudyIcon, RainyIcon, WindyIcon, SnowyIcon, StormIcon, HotThermometerIcon, ColdThermometerIcon } from "./Icons";
import { useWeather } from "../../context/WeatherContext";

const WeatherMain = () => {
  const { selectedCity } = useWeather();
  const weatherData = selectedCity;

  const renderWeatherIcon = (icon, temperature) => {
    // Casos especiales por temperatura
    if (temperature < 1) return <SnowyIcon />;
    if (temperature >= 1 && temperature <= 12) return <ColdThermometerIcon />;

    // Íconos SVG segun condicion
    switch (icon) {
      case "cloudy":
        return <CloudyIcon />;
      case "rain":
        return <RainyIcon />;
      case "windy":
        return <WindyIcon />;
      case "snow":
        return <SnowyIcon />;
      case "storm":
        return <StormIcon />;
      case "sunny":
        return temperature > 30 ? <HotThermometerIcon /> : <SunnyIcon />;
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
          {renderWeatherIcon(weatherData.icon, weatherData.temperature)}
        </div>
      </div>
    </section>
  );
};

export default WeatherMain;