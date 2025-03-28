import s from "./queroDoar.module.scss";
import frame from "../../assets/Frame.png";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { useState } from "react";
import axios from "axios";

export default function QueroDoar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [imagem_url, setImagem_url] = useState("");

  const capturarTitulo = (e) => {
    setTitulo(e.target.value);
  };
  const capturarCategoria = (e) => {
    setCategoria(e.target.value);
  };
  const capturarAutor = (e) => {
    setAutor(e.target.value);
  };
  const capturarImagemURL = (e) => {
    setImagem_url(e.target.value);
  };

  const enviarDados = async () => {
    const endPointAPI = "https://api-livros-udtp.onrender.com/doar";

    const dadosAEnviar = {
      titulo,
      categoria,
      autor,
      imagem_url,
    };

    try {
      const resposta = await axios.post(endPointAPI, dadosAEnviar);
      alert("Livro cadastrado com sucesso!");
    } catch (erro) {
      console.error("Erro ao cadastrar livro:", erro);
      alert("Erro ao cadastrar livro. Verifique os dados e tente novamente.");
    }
  };

  return (
    <>
      <Header />
      <section className={s.sectionQueroDoar}>
        <p>
          Por favor, preencha o formulário com suas informações e as informações
          do Livro
        </p>
        <section className={s.sectionForm}>
          <section className={s.sectionFrameText}>
            <img src={frame} alt="Figura de um livro aberto." />
            <h2>Informações do Livro</h2>
          </section>
          <section className={s.sectionInputDoar}>
            {/* <form onSubmit={(e) => e.preventDefault()}> */}
              <input
                type="text"
                placeholder="Título"
                onChange={capturarTitulo}
              />
              <input
                type="text"
                placeholder="Categoria"
                onChange={capturarCategoria}
              />
              <input type="text" placeholder="Autor" onChange={capturarAutor} />
              <input
                type="text"
                placeholder="Link da Imagem"
                onChange={capturarImagemURL}
              />
              {/* <button onClick={enviarDados}>Doar</button> */}
            {/* </form> */}
          </section>
          <button onClick={enviarDados}>Doar</button>
        </section>
      </section>
      <Footer />
    </>
  );
}
