import s from './queroDoar.module.scss';
import frame from '../../assets/Frame.png';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

export default function QueroDoar() {
  return (
    <>
      <Header />
      <main>
        <section className={s.sectionQueroDoar}>
          <p>
            Por favor, preencha o formulário com suas informações e as
            informações do Livro
          </p>
          <section className={s.sectionForm}>
            <section className={s.sectionFrameText}>
              <img src={frame} alt="Figura de um livro aberto." />
              <h2>Informações do Livro</h2>
            </section>
            <section className={s.sectionInputDoar}>
              <input type="text" placeholder="Título" />
              <input type="text" placeholder="Categoria" />
              <input type="text" placeholder="Autor" />
              <input type="text" placeholder="Link da Imagem" />
            </section>
            <button>Doar</button>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
