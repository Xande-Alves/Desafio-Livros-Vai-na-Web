import s from "./ComponentLivroDoado.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ComponentLivroDoado() {
  // Estado para armazenar os produtos filtrados da API
  const [livros, setLivros] = useState([]);
  // Obtendo os livros da API
  const renderizaLivros = async () => {
    try {
      const response = await axios.get(
        "https://api-livros-udtp.onrender.com/livros"
      );
      const dadosLivros = response.data;
      setLivros(dadosLivros);
    } catch (error) {
      console.error("Erro ao buscar lista de livros:", error);
    }
  };

  useEffect(() => {
    renderizaLivros();
  }, []);

  return (
    <section className={s.livroDoado}>
      {livros.map((item) => {
        return (
          <div>
            <img
              src={item.imagem_url}
              alt={item.titulo}
            />
            <section>
              <h3>{item.titulo}</h3>
              <p>{item.autor}</p>
              <p>{item.categoria}</p>
            </section>
          </div>
        );
      })}
    </section>
  );
}
