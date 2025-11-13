import { useQuery, useMutation } from '@tanstack/react-query';
import { weatherService } from '../services/weatherService';

// Hook para obtener datos del clima (useQuery - lectura)
export const useWeatherData = (cityName) => {
  return useQuery({
    queryKey: ['weather', cityName],
    queryFn: () => weatherService.getWeatherData(cityName),
    enabled: !!cityName,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};

// Hook para obtener lista de ciudades (useQuery - lectura)
export const useCities = () => {
  return useQuery({
    queryKey: ['cities'],
    queryFn: () => weatherService.getCities(),
    staleTime: 10 * 60 * 1000,
  });
};

// Hook para actualizar preferencias 
export const useUpdateWeatherPreference = () => {
  return useMutation({
    mutationFn: ({ cityName, preferences }) =>
      weatherService.updateWeatherPreference(cityName, preferences),
  });
};