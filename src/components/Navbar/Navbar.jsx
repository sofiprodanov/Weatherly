import { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FiSearch } from "react-icons/fi";
import { useWeather } from "../../context/WeatherContext";

const Navbar = () => {
  const { changeCity, cities, isLoading } = useWeather();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCitySelect = (city) => {
    changeCity(city);
    setSearchTerm("");
    setShowSuggestions(false);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={styles.searchContainer} ref={searchRef}>
        <FiSearch className={styles.icon} />
        <input
          type="text"
          placeholder={isLoading ? "Cargando..." : "Buscar provincia o localidad..."}
          className={styles.input}
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          disabled={isLoading} 
        />

        {showSuggestions && searchTerm && !isLoading && ( 
          <div className={styles.suggestions}>
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => (
                <div
                  key={city}
                  className={styles.suggestionItem}
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </div>
              ))
            ) : (
              <div className={styles.noResults}>No se encontraron ciudades</div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
