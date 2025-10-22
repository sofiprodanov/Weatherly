import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <h2>Bienvenida a Weather Web ☁️</h2>
        <p>Acá se va a mostrar el clima de distintas ciudades.</p>
      </Container>
    </>
  );
}

export default App;
