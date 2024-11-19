import './LivrosDoados.css'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ListaLivrosDoados from '../../Components/ListaLivrosDoados/ListaLivrosDoados';

export default function LivrosDoados() {
  return (
    <>
      <Header />
      <section className='sectionPageLivrosDoados'>
        <ListaLivrosDoados />
      </section>
      <Footer />
    </>
  );
}
