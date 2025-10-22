import styles from "./CityList.module.css";
import { cities } from "../../data/citiesMock";


//#TODO: QUIERO QUE SE PUEDA ELEGIR LA PROVINCICIA Y LOCALIDAD
function CityList() {
  return (
    <section className={styles.cityList}>
      <h2>Provincias de Argentina</h2>
      <div className={styles.grid}>
        {cities.map((city) => (
          <div key={city.id} className={styles.card}>
            <h3>{city.name}</h3>
            <p>{city.province}</p>
            <p>{city.temperature}°C</p>
            <span>{city.condition}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CityList;
