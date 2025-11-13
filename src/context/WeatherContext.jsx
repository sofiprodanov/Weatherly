import { createContext, useContext, useState } from "react";
import { useWeatherData, useCities } from "../hooks/useWeather";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [selectedCityName, setSelectedCityName] = useState("Resistencia");
  
  // React Query para obtener datos del clima
  const { 
    data: selectedCity, 
    isLoading, 
    error,
    isFetching 
  } = useWeatherData(selectedCityName);

  // React Query para obtener lista de ciudades
  const { data: cities = [] } = useCities();

  const changeCity = (cityName) => {
    setSelectedCityName(cityName);
  };

  return (
    <WeatherContext.Provider value={{ 
      selectedCity, 
      changeCity,
      cities,
      isLoading: isLoading || isFetching,
      error
    }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather debe usarse dentro de WeatherProvider");
  }
  return context;
};
