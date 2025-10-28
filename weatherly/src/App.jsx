import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import "./styles/globals.css";

/**
 * - Renderiza el Layout y dentro de él la página principal (Home).
 */
function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
