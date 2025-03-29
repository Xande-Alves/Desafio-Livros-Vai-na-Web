import s from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import lupa from "../../assets/lupa.png";
import { useSearch } from "../../contexts/SearchContext";

export default function Header() {
  const { setTermoPesquisa } = useSearch(); // Pegando o setter do contexto

  return (
    <section className={s.headerContent}>
      <section className={s.logoTitulo}>
        <img
          src={logo}
          alt="Imagem da logo, com um livro aberto e com páginas passando."
        />
        <h1>Livros Vai na Web</h1>
      </section>

      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/LivrosDoados">Livros Doados</Link>
          </li>
          <li>
            <Link to="/QueroDoar">Quero Doar</Link>
          </li>
        </ul>
      </nav>
      <section className={s.searchSection}>
        <input
          type="search"
          id=""
          placeholder="O que você procura?"
          onChange={(e) => setTermoPesquisa(e.target.value)}
        />
        <Link to="/Pesquisa">
          <img src={lupa} alt="imagem de lupa que simboliza procura" />
        </Link>
      </section>
    </section>
  );
}
