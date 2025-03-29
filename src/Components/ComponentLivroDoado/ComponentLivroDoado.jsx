import { useState, useEffect } from "react";
import { useSearch } from "../../contexts/SearchContext"; // Importando o contexto
import axios from "axios";
import s from "./ComponentLivroDoado.module.scss";

export default function ComponentLivroDoado() {
  const [livros, setLivros] = useState([]);
  const { termoPesquisa } = useSearch(); // Pegando o termo de pesquisa

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await axios.get(
          "https://api-livros-udtp.onrender.com/livros"
        );
        setLivros(response.data);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };

    fetchLivros();
  }, []);

  // Filtrar os livros com base no termo de pesquisa
  const livrosFiltrados = livros.filter(
    (livro) =>
      livro.titulo.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
      livro.autor.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
      livro.categoria.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  return (
    <section className={s.livroDoado}>
      {livrosFiltrados.length > 0 ? (
        livrosFiltrados.map((livro) => (
          <div key={livro.id}>
            <img src={livro.imagem_url} alt={livro.titulo} />
            <section>
              <h3>{livro.titulo}</h3>
              <p>{livro.autor}</p>
              <p>{livro.categoria}</p>
            </section>
          </div>
        ))
      ) : (
        <p>Nenhum livro encontrado...</p>
      )}
    </section>
  );
}
