import styles from "./AirConditions.module.css";
import { WiRaindrops, WiHumidity, WiStrongWind, WiThermometer } from "react-icons/wi";
import { airConditionsMock } from "../../data/airConditionsMock";

const AirConditions = () => {
  const { feels_like, humidity, wind_speed, rain_probability } = airConditionsMock;

  return (
    <section className={styles.airConditions}>
      <h3 className={styles.title}>Condiciones del aire</h3>

      <div className={styles.grid}>
        <div className={styles.item}>
          <WiThermometer size={40} color="#facc15" />
          <div>
            <p className={styles.label}>Sensación térmica</p>
            <p className={styles.value}>{feels_like}°</p>
          </div>
        </div>

        <div className={styles.item}>
          <WiStrongWind size={40} color="#38bdf8" />
          <div>
            <p className={styles.label}>Viento</p>
            <p className={styles.value}>{wind_speed} km/h</p>
          </div>
        </div>

        <div className={styles.item}>
          <WiHumidity size={40} color="#60a5fa" />
          <div>
            <p className={styles.label}>Humedad</p>
            <p className={styles.value}>{humidity}%</p>
          </div>
        </div>

        <div className={styles.item}>
          <WiRaindrops size={40} color="#3b82f6" />
          <div>
            <p className={styles.label}>Prob. de lluvia</p>
            <p className={styles.value}>{rain_probability}%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirConditions;
