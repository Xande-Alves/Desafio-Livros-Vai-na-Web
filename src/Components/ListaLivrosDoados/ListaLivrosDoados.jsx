import './ListaLivrosDoados.css';
import livro1 from '../../assets/livro1.png';

export default function ListaLivrosDoados() {
  return (
    <section>
      <h2 className="tituloLivrosDoados">Livros Doados</h2>
      <section className="sectionListaLivros">
        <section className="livroDoado">
          <img
            src={livro1}
            alt="Imagem do livro O Protagonista, de Susanne Andrade"
          />
          <section className="infoLivros">
            <p>O Protagonista</p>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </section>
        </section>
      </section>
    </section>
  );
}
