import styles from "./Home.module.css";
import WeatherMain from "../components/WeatherMain/WeatherMain";
import HourlyForecast from "../components/HourlyForecast/HourlyForecast";
import AirConditions from "../components/AirConditions/AirConditions";
import WeeklyForecast from "../components/WeeklyForecast/WeeklyForecast";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.leftColumn}>
        <WeatherMain />
        <HourlyForecast />
        <AirConditions />
      </div>

      <div className={styles.rightColumn}>
        <WeeklyForecast />
      </div>
    </div>
  );
};

export default Home;
