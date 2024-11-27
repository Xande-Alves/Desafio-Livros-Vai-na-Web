import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './globalStyle/globalStyle.scss';
import Header from './Components/Header/Header';
import Inicio from './Pages/Inicio/Inicio';
import LivrosDoados from './Pages/LivrosDoados/LivrosDoados';
import QueroDoar from './Pages/QueroDoar/QueroDoar';
import Pesquisa from './Pages/Pesquisa/Pesquisa';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/LivrosDoados" element={<LivrosDoados />} />
          <Route path="/QueroDoar" element={<QueroDoar />} />
          <Route path="/Pesquisa" element={<Pesquisa />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
