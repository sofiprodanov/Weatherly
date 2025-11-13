import styles from "./WeeklyForecast.module.css";
import { WiDaySunny, WiCloudy, WiRain, WiStrongWind, WiSnow } from "react-icons/wi";
import { useWeather } from "../../context/WeatherContext";
import LoadingSpinner from "../UI/LoadingSpinner";
import ErrorMessage from "../UI/ErrorMessage";


const WeeklyForecast = () => {
  const { selectedCity, isLoading, error } = useWeather();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!selectedCity) return <ErrorMessage message="No hay ciudad seleccionada" />;
  if (!selectedCity.weeklyForecast) return <ErrorMessage message="Pronóstico semanal no disponible" />;

  const weeklyForecast = selectedCity.weeklyForecast;

  const renderIcon = (icon) => {
    switch (icon) {
      case "cloudy":
        return <WiCloudy size={40} color="#38bdf8" />;
      case "rain":
        return <WiRain size={40} color="#3b82f6" />;
      case "snow":
        return <WiSnow size={40} color="#e0f2fe" />;
      case "windy":
        return <WiStrongWind size={40} color="#93c5fd" />;
      default:
        return <WiDaySunny size={40} color="#facc15" />;
    }
  };

  return (
    <section className={styles.weeklyForecast}>
      <h3 className={styles.title}>Próximos 7 días</h3>
      <div className={styles.list}>
        {weeklyForecast.map((dayData, index) => (
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