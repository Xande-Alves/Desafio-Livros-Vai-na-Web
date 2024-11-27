import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';
import card4 from '../../assets/card4.png';
import s from './inicio.module.scss';

export default function Inicio() {
  return (
    <>
      <Header />
      <main>
        <section className={s.sectionMainFoto}>
          <h1>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
        </section>
        <section className={s.sectionTextCards}>
          <h1>Por que devo doar?</h1>
          <section className={s.sectionCards}>
            <section className={s.card}>
              <img
                src={card1}
                alt="Figura de quatro pessoas ligadas em um círculo."
              />
              <p>
                Oferece livros a quem não tem acesso, ajudando a reduzir a
                exclusão social.
              </p>
            </section>
            <section className={s.card}>
              <img src={card2} alt="Figura de uma pessoa lendo um livro." />
              <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
            </section>
            <section className={s.card}>
              <img
                src={card3}
                alt="Figura de pessoas tendo o seu moral elevado."
              />
              <p>
                Fornece conhecimento e inspiração, permitindo que indivíduos
                transformem suas vidas.
              </p>
            </section>
            <section className={s.card}>
              <img src={card4} alt="Figura da balança da justiça." />
              <p>
                Garante que todos, independentemente de sua condição, tenham
                oportunidades de aprendizado.
              </p>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
