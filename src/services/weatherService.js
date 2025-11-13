// Servicio de clima - intermediario entre componentes y datos
export const weatherService = {
  // Simular delay de API (para testing)
  delay: (ms) => new Promise(resolve => setTimeout(resolve, ms)),

  // Obtener datos de clima de una ciudad
  async getWeatherData(cityName) {
    await this.delay(800); // Simular carga de API

    // DATOS MOCK TEMPORALES - luego los reemplazamos con API real
    const mockData = {
      "Resistencia": {
        id: 1,
        city: "Resistencia",
        province: "Chaco",
        temperature: 33,
        condition: "Soleado y caluroso",
        icon: "sunny",
        air: {
          feels_like: 36,
          humidity: 50,
          wind_speed: 10,
          rain_probability: 5,
        },
        hourlyForecast: [
          { hour: "09:00", temperature: 28, icon: "sunny" },
          { hour: "11:00", temperature: 30, icon: "sunny" },
          { hour: "13:00", temperature: 33, icon: "sunny" },
          { hour: "15:00", temperature: 35, icon: "sunny" },
          { hour: "17:00", temperature: 34, icon: "cloudy" },
          { hour: "19:00", temperature: 32, icon: "cloudy" },
          { hour: "21:00", temperature: 29, icon: "cloudy" },
          { hour: "23:00", temperature: 27, icon: "cloudy" },
        ],
        weeklyForecast: [
          { day: "Lun", max: 34, min: 22, icon: "sunny" },
          { day: "Mar", max: 33, min: 23, icon: "sunny" },
          { day: "Mié", max: 31, min: 21, icon: "cloudy" },
          { day: "Jue", max: 32, min: 20, icon: "sunny" },
          { day: "Vie", max: 30, min: 19, icon: "rain" },
          { day: "Sáb", max: 29, min: 18, icon: "cloudy" },
          { day: "Dom", max: 32, min: 21, icon: "sunny" },
        ],
      },
      "Buenos Aires": {
        id: 2,
        city: "Buenos Aires",
        province: "Buenos Aires",
        temperature: 25,
        condition: "Lluvioso con intervalos de sol",
        icon: "rain",
        air: {
          feels_like: 26,
          humidity: 80,
          wind_speed: 18,
          rain_probability: 70,
        },
        hourlyForecast: [
          { hour: "09:00", temperature: 22, icon: "rain" },
          { hour: "11:00", temperature: 23, icon: "rain" },
          { hour: "13:00", temperature: 24, icon: "rain" },
          { hour: "15:00", temperature: 25, icon: "cloudy" },
          { hour: "17:00", temperature: 24, icon: "cloudy" },
          { hour: "19:00", temperature: 23, icon: "rain" },
          { hour: "21:00", temperature: 22, icon: "cloudy" },
          { hour: "23:00", temperature: 21, icon: "cloudy" },
        ],
        weeklyForecast: [
          { day: "Lun", max: 26, min: 19, icon: "rain" },
          { day: "Mar", max: 27, min: 20, icon: "cloudy" },
          { day: "Mié", max: 25, min: 18, icon: "rain" },
          { day: "Jue", max: 26, min: 19, icon: "cloudy" },
          { day: "Vie", max: 27, min: 21, icon: "sunny" },
          { day: "Sáb", max: 28, min: 22, icon: "sunny" },
          { day: "Dom", max: 30, min: 23, icon: "sunny" },
        ],
      },
      "Córdoba": {
        id: 3,
        city: "Córdoba",
        province: "Córdoba",
        temperature: 14,
        condition: "Nublado y fresco",
        icon: "cloudy",
        air: {
          feels_like: 12,
          humidity: 68,
          wind_speed: 14,
          rain_probability: 15,
        },
        hourlyForecast: [
          { hour: "09:00", temperature: 13, icon: "cloudy" },
          { hour: "11:00", temperature: 14, icon: "cloudy" },
          { hour: "13:00", temperature: 15, icon: "cloudy" },
          { hour: "15:00", temperature: 16, icon: "cloudy" },
          { hour: "17:00", temperature: 15, icon: "cloudy" },
          { hour: "19:00", temperature: 14, icon: "cloudy" },
          { hour: "21:00", temperature: 13, icon: "cloudy" },
          { hour: "23:00", temperature: 12, icon: "cloudy" },
        ],
        weeklyForecast: [
          { day: "Lun", max: 17, min: 8, icon: "cloudy" },
          { day: "Mar", max: 18, min: 9, icon: "cloudy" },
          { day: "Mié", max: 19, min: 8, icon: "cloudy" },
          { day: "Jue", max: 20, min: 10, icon: "sunny" },
          { day: "Vie", max: 22, min: 12, icon: "sunny" },
          { day: "Sáb", max: 20, min: 11, icon: "cloudy" },
          { day: "Dom", max: 19, min: 10, icon: "cloudy" },
        ],
      },
      "Mendoza": {
        id: 4,
        city: "Mendoza",
        province: "Mendoza",
        temperature: 19,
        condition: "Ventoso y parcialmente nublado",
        icon: "windy",
        air: {
          feels_like: 17,
          humidity: 60,
          wind_speed: 38,
          rain_probability: 5,
        },
        hourlyForecast: [
          { hour: "09:00", temperature: 17, icon: "cloudy" },
          { hour: "11:00", temperature: 18, icon: "windy" },
          { hour: "13:00", temperature: 19, icon: "windy" },
          { hour: "15:00", temperature: 21, icon: "windy" },
          { hour: "17:00", temperature: 20, icon: "cloudy" },
          { hour: "19:00", temperature: 18, icon: "cloudy" },
          { hour: "21:00", temperature: 16, icon: "cloudy" },
          { hour: "23:00", temperature: 15, icon: "cloudy" },
        ],
        weeklyForecast: [
          { day: "Lun", max: 20, min: 10, icon: "windy" },
          { day: "Mar", max: 21, min: 12, icon: "cloudy" },
          { day: "Mié", max: 19, min: 9, icon: "windy" },
          { day: "Jue", max: 17, min: 8, icon: "cloudy" },
          { day: "Vie", max: 18, min: 7, icon: "cloudy" },
          { day: "Sáb", max: 20, min: 9, icon: "windy" },
          { day: "Dom", max: 22, min: 11, icon: "sunny" },
        ],
      },
      "Ushuaia": {
        id: 5,
        city: "Ushuaia",
        province: "Tierra del Fuego",
        temperature: -3,
        condition: "Nevando con ráfagas de viento",
        icon: "snow",
        air: {
          feels_like: -7,
          humidity: 90,
          wind_speed: 42,
          rain_probability: 60,
        },
        hourlyForecast: [
          { hour: "09:00", temperature: -4, icon: "snow" },
          { hour: "11:00", temperature: -4, icon: "snow" },
          { hour: "13:00", temperature: -3, icon: "snow" },
          { hour: "15:00", temperature: -2, icon: "snow" },
          { hour: "17:00", temperature: -3, icon: "snow" },
          { hour: "19:00", temperature: -4, icon: "snow" },
          { hour: "21:00", temperature: -5, icon: "snow" },
          { hour: "23:00", temperature: -6, icon: "snow" },
        ],
        weeklyForecast: [
          { day: "Lun", max: -1, min: -6, icon: "snow" },
          { day: "Mar", max: 0, min: -5, icon: "snow" },
          { day: "Mié", max: -2, min: -7, icon: "snow" },
          { day: "Jue", max: 1, min: -6, icon: "snow" },
          { day: "Vie", max: 2, min: -5, icon: "snow" },
          { day: "Sáb", max: 1, min: -6, icon: "snow" },
          { day: "Dom", max: -1, min: -7, icon: "snow" },
        ],
      },
    };

    // Validar que la ciudad existe
    if (!mockData[cityName]) {
      throw new Error(`Ciudad "${cityName}" no encontrada`);
    }

    return mockData[cityName];
  },

  // Obtener lista de ciudades disponibles
  async getCities() {
    await this.delay(300); // Simular carga
    return ["Resistencia", "Buenos Aires", "Córdoba", "Mendoza", "Ushuaia"];
  },

  async updateWeatherPreference(cityName, preferences) {
    await this.delay(300); // Simular guardado en API
    console.log("📍 useMutation DEMO - Guardando preferencias:", {
      cityName,
      preferences
    });

    // Simular respuesta exitosa de API
    return {
      success: true,
      message: "Preferencias guardadas correctamente",
      data: { cityName, ...preferences },
      timestamp: new Date().toISOString()
    };
  }
};