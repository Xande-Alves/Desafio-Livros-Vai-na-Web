import './Cards.css';
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';
import card4 from '../../assets/card4.png';

export default function Cards() {
  return (
    <>
      <section className="sectionTextCards"> 
        <h1>Por que devo doar?</h1>
        <section className="sectionCards">
          <section className="card">
            <img
              src={card1}
              alt="Figura de quatro pessoas ligadas em um círculo."
            />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </section>
          <section className="card">
            <img src={card2} alt="Figura de uma pessoa lendo um livro." />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>
          <section className="card">
            <img
              src={card3}
              alt="Figura de pessoas tendo o seu moral elevado."
            />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </section>
          <section className="card">
            <img src={card4} alt="Figura da balança da justiça." />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </section>
        </section>
      </section>
    </>
  );
}
