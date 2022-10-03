//importmaos estilos
import "./styles.css";

//importamos hooks de requeridos de react y context
import { useEffect, useState } from "react";
import Context from "./Context/Context";

//importamos react-router-dom para las rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importamos componentes requeridos
import Navbar from "./components/Navbar";

//importamos los views requeridos
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import NotFound from "./views/NotFound";


export default function App() {
  const endpoint = "/fotos.json";

  useEffect(() => {
    const getFotos = async () => {
      const resp = await fetch(endpoint)
      const data = await resp.json()
      setFotos(data.photos);
    }
    getFotos()
  }, []);
  const [fotos, setFotos] = useState([]);
  const sharedState = { fotos, setFotos };

  return (
    <div className="App">
      <Context.Provider value={sharedState}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>

    </div>
  );
}
