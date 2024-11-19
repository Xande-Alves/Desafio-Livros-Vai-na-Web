import './QueroDoar.css';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import InfoDoar from '../../Components/InfoDoar/InfoDoar';

export default function QueroDoar() {
  return (
    <>
      <Header />
      <section className='sectionQueroDoar'>
        <p className="paragrafoDoar">
          Por favor, preencha o formulário com suas informações e as informações
          do Livro
        </p>
        <InfoDoar />
      </section>

      <Footer />
    </>
  );
}
