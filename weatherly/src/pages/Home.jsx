import styles from "./Home.module.css";
import WeatherMain from "../components/WeatherMain/WeatherMain";
import HourlyForecast from "../components/HourlyForecast/HourlyForecast";
import AirConditions from "../components/AirConditions/AirConditions";
import WeeklyForecast from "../components/WeeklyForecast/WeeklyForecast";

const Home = () => {
  return (
    <div className={styles.homeContent}>
      {/*Contenido principal */}
      <div className={styles.leftColumn}>
        <div className={styles.topSection}>
          <WeatherMain />
        </div>

        {/*Hourly Forecast */}
        <div className={styles.middleSection}>
          <HourlyForecast />
          <AirConditions />
        </div>
      </div>

      {/*Weekly Forecast */}
      <div className={styles.rightColumn}>
        <WeeklyForecast />
      </div>
    </div>
  );
};

export default Home;