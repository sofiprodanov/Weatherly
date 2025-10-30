import { useWeather } from "../../context/WeatherContext";
import styles from "./CityList.module.css";

const CityList = () => {
  const { changeCity, selectedCity } = useWeather();
  const cities = [
    "Resistencia",
    "Mendoza",
    "Buenos Aires",
    "Córdoba",
    "Ushuaia",
  ];

  return (
    <aside className={styles.sidebar}>
      {cities.map((city) => (
        <button
          key={city}
          className={`${styles.cityButton} ${
            selectedCity.city === city ? styles.active : ""
          }`}
          onClick={() => changeCity(city)}
        >
          {city}
        </button>
      ))}
    </aside>
  );
};

export default CityList;

