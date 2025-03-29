import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./globalStyle/globalStyle.scss";
import Inicio from "./Pages/Inicio/Inicio";
import LivrosDoados from "./Pages/LivrosDoados/LivrosDoados";
import QueroDoar from "./Pages/QueroDoar/QueroDoar";
import Pesquisa from "./Pages/Pesquisa/Pesquisa";
import { SearchProvider } from "./contexts/SearchContext";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/LivrosDoados" element={<LivrosDoados />} />
            <Route path="/QueroDoar" element={<QueroDoar />} />
            <Route path="/Pesquisa" element={<Pesquisa />} />
          </Routes>
        </SearchProvider>
      </BrowserRouter>
    </>
  );
}
