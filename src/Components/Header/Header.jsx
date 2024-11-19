import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import lupa from '../../assets/lupa.png';

export default function Header() { 
  return (
    <section className="headerContent">
      <section className="logo-titulo">
        <img
          src={logo}
          alt="Imagem da logo, com um livro aberto e com páginas passando."
          className="imgLogoHeader"
        />
        <h1>Livros Vai na Web</h1>
      </section>

      <nav>
        <ul>
          <li>
            <Link className="linkHeader" to="/">
              Início
            </Link>
          </li>
          <li>
            <Link className="linkHeader" to="/LivrosDoados">
              Livros Doados
            </Link>
          </li>
          <li>
            <Link className="linkHeader" to="/QueroDoar">
              Quero Doar
            </Link>
          </li>
        </ul>
      </nav>
      <section className="searchSection">
        <input type="search" name="" id="" placeholder="O que você procura?" />
        <Link to="/Pesquisa">
          <img src={lupa} alt="imagem de lupa que simboliza procura" />
        </Link>
      </section>
    </section>
  );
}