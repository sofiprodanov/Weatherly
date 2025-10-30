import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import { WeatherProvider } from "./context/WeatherContext";
import "./styles/globals.css";

/**
 * - Renderiza el Layout y dentro de él la página principal (Home).
 */
function App() {
  return (
     <WeatherProvider>
      <Layout>
        <Home />
      </Layout>
    </WeatherProvider>
  );
}

export default App;
