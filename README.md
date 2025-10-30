# Weatherly 🌤️

Weatherly es una aplicación web de clima interactiva construida con **React**, pensada como un dashboard moderno y visual para consultar el clima por ciudad. El proyecto integra **diseño responsivo** y **efectos 3D en tarjetas**.

---

## Tabla de Contenidos

1. [Features](#features)
2. [Demo](#demo)
3. [Tecnologías](#tecnologías)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Instalación](#instalación)
6. [Uso](#uso)
7. [Personalización](#personalización)
8. [Licencia](#licencia)

---

## Features

* Dashboard principal con resumen del clima por ciudad.
* Búsqueda por localidad.
* Sidebar con categorías y navegación clara.
* Tarjetas interactivas.
* Iconos dinámicos de clima según condiciones (sol, lluvia, nieve, nublado, etc.).
* Horarios y pronósticos por hora.
* Diseño responsivo, moderno y minimalista.

---

## Demo

> Puedes ver el proyecto en [Vercel](#).

---

## Tecnologías

* **Frontend:** React + Vite
* **Estilos:** CSS puro
* **Gestión de estado:** React hooks (`useState`, `useEffect`)
* **Routing:** React Router
* **Data Mock:** Archivos `citiemock` y `citiesMock` para pruebas sin API externa
* **Deploy:** Vercel

---

## Estructura del Proyecto

```
weatherly/
├── public/                                 # Archivos públicos estáticos
│   └── iconweathely.svg
├── src/                                    # Código fuente principal
│   ├── components/                         # Componentes de React
│   │   ├── AirConditions/                  # Componente de condiciones del aire
│   │   │   ├── AirConditions.jsx
│   │   │   └── AirConditions.module.css
│   │   ├── HourlyForecast/                 # Pronóstico por horas
│   │   │   ├── HourlyForecast.jsx
│   │   │   └── HourlyForecast.module.css
│   │   ├── Layout/                         # Layout principal
│   │   │   ├── Layout.jsx
│   │   │   └── Layout.module.css
│   │   ├── Navbar/                         # Barra de navegación
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── Sidebar/                        # Barra lateral
│   │   │   ├── Sidebar.jsx
│   │   │   └── Sidebar.module.css
│   │   ├── WeatherMain/                    # Componente principal del clima e iconos SVG.
│   │   │   ├── Icons/
│   │   │   │   ├── index.js
│   │   │   │   └── ...
│   │   │   ├── WeatherMain.jsx
│   │   │   └── WeatherMain.module.css
│   │   └── WeeklyForecast/                 # Pronóstico semanal
│   │       ├── WeeklyForecast.jsx
│   │       └── WeeklyForecast.module.css
│   ├── context/                            # Contexto para estado del clima
│   │   └── WeatherContext.jsx              
│   ├── data/                               # Datos mock de ciudades
│   │   └── citiesMock.js
│   ├── pages/                              # Página principal de la aplicación
│   │   ├── Home.jsx                        
│   │   └── Home.module.css                 
│   ├── styles/                             # Estilos CSS globales
│   │   └── globals.css                     
│   ├── App.jsx                             # Componente raíz de la aplicación
│   └── main.jsx                            
├── package.json                            # Configuración del proyecto y dependencias
└── README.md                               
```

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/weatherly.git
```

2. Entrar a la carpeta del proyecto:

```bash
cd weatherly
```

3. Instalar dependencias:

```bash
npm install
```

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

5. Para producción (build optimizado):

```bash
npm run build
```

> Nota: `dist/` y `node_modules/` deberían estar en `.gitignore`.

---

## Uso

* Abrir la aplicación.
* Usar el **sidebar** para navegar entre categorías o secciones.
* Buscar por ciudad usando el **navbar**.
* Consultar pronósticos y ver iconos de clima dinámicos según las condiciones.

## Licencia

Este proyecto es **Open Source** bajo licencia MIT.
