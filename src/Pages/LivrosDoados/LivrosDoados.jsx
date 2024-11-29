import s from './LivrosDoados.module.scss';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ComponentLivroDoado from '../../Components/ComponentLivroDoado/ComponentLivroDoado';

export default function LivrosDoados() {
  return (
    <>
      <Header />
      <section className={s.sectionPageLivrosDoados}>
        <h2>Livros Doados</h2>
        <section className={s.ListaPageLivrosDoados}>
          <ComponentLivroDoado />
        </section>
      </section>
      <Footer />
    </>
  );
}
