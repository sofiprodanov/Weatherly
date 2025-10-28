import styles from "./WeatherMain.module.css";
import { WiDaySunny, WiCloudy, WiRain, WiStrongWind } from "react-icons/wi";
import { citiesMock } from "../../data/citiesMock";

/**
 * WeatherMain.jsx
 * - Caja principal del dashboard del clima.
 * - Muestra la provincia, localidad, temperatura e ícono del clima.
 * - Usa datos mockeados desde /data/citiesMock.js.
 */

const WeatherMain = () => {
  // Tomamos el primer registro del mock (por ahora)
  const weatherData = citiesMock[0];

  // Función para renderizar ícono según el tipo de clima
  const renderWeatherIcon = (icon) => {
    switch (icon) {
      case "cloudy":
        return <WiCloudy size={70} color="#38bdf8" />;
      case "rain":
        return <WiRain size={70} color="#38bdf8" />;
      case "windy":
        return <WiStrongWind size={70} color="#38bdf8" />;
      default:
        return <WiDaySunny size={70} color="#facc15" />;
    }
  };

  return (
    <section className={styles.weatherMain}>
      <div className={styles.left}>
        <h2 className={styles.city}>
          {weatherData.city}, {weatherData.province}
        </h2>
        <p className={styles.condition}>{weatherData.condition}</p>
      </div>

      <div className={styles.right}>
        {renderWeatherIcon(weatherData.icon)}
        <span className={styles.temperature}>{weatherData.temperature}°</span>
      </div>
    </section>
  );
};

export default WeatherMain;
