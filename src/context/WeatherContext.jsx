import { createContext, useContext, useState } from "react";
import { citiesMock } from "../data/citiesMock";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(citiesMock[0]);

  const changeCity = (cityName) => {
    const newCity = citiesMock.find((city) => city.city === cityName);
    if (newCity) setSelectedCity(newCity);
  };

  const availableCities = citiesMock.map(city => city.city);

  return (
    <WeatherContext.Provider value={{ 
      selectedCity, 
      changeCity,
      cities: availableCities
    }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
