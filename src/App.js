import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main"
import Personajes from "./components/Personajes"
import Episodios from "./components/Episodios"
import Ubicaciones from "./components/Ubicaciones"
import NavBar from "./components/NavBar"
import DetallePersonaje from "./components/DetallePersonaje"
import ErrorNoEncontrado from "./components/ErrorNoEncontrado"

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personajes/:idPersonaje" element={<DetallePersonaje />} />
        <Route path="/episodios" element={<Episodios />} />
        <Route path="/ubicaciones" element={<Ubicaciones />} />
        <Route path="*" element={<ErrorNoEncontrado />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;



