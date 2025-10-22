import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import CityList from "./components/CityList/CityList";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <h2>Bienvenida a Weather Web ☁️</h2>
        <p>Clima actual de provincias argentinas:</p>
        <CityList />
      </Container>
    </>
  );
}

export default App;
