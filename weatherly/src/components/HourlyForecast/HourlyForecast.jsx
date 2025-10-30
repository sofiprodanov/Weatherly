import styles from "./HourlyForecast.module.css";
import { WiDaySunny, WiCloudy, WiRain, WiNightClear, WiNightAltCloudy, WiSunset, WiSunrise } from "react-icons/wi";
import { useWeather } from "../../context/WeatherContext";

const HourlyForecast = () => {
  const { selectedCity } = useWeather();
  const forecast = selectedCity.hourlyForecast;

  const renderIcon = (icon, hour) => {
    const hourNumber = parseInt(hour.split(":")[0]);

    // Franja horaria
    const isSunrise = hourNumber >= 5 && hourNumber < 7;
    const isDay = hourNumber >= 7 && hourNumber < 17;    
    const isSunset = hourNumber >= 17 && hourNumber < 20;
    const isNight = hourNumber >= 20 || hourNumber < 5;  

    // Íconos según franja horaria
    if (isNight) {
      if (icon === "cloudy") return <WiNightAltCloudy size={40} color="#94a3b8" />;
      if (icon === "rain") return <WiRain size={40} color="#3b82f6" />;
      return <WiNightClear size={40} color="#facc15" />; 
    }

    if (isSunrise) {
      return <WiSunrise size={40} color="#fbbf24" />; // Amanecer
    }

    if (isSunset) {
      return <WiSunset size={40} color="#fb923c" />; // Atardecer
    }

    // Día
    if (isDay) {
      switch (icon) {
        case "cloudy":
          return <WiCloudy size={40} color="#38bdf8" />;
        case "rain":
          return <WiRain size={40} color="#38bdf8" />;
        default:
          return <WiDaySunny size={40} color="#facc15" />;
      }
    }
  };

  return (
    <section className={styles.hourlyForecast}>
      <h3 className={styles.title}>Pronóstico por hora</h3>
      <div className={styles.list}>
        {forecast.map((hourData, index) => (
          <div key={index} className={styles.item}>
            <p className={styles.hour}>{hourData.hour}</p>
            {renderIcon(hourData.icon, hourData.hour)}
            <p className={styles.temp}>{hourData.temperature}°</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HourlyForecast;
