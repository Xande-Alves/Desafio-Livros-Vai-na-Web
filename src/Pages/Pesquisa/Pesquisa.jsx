import s from './Pesquisa.module.scss';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ComponentLivroDoado from '../../Components/ComponentLivroDoado/ComponentLivroDoado';


export default function LivrosDoados() {
  return (
    <>
      <Header />
      <section className={s.sectionPageLivrosDoados}>
        <h2>Resultados da pesquisa</h2>
        <section className={s.ListaPageLivrosDoados}>
          <ComponentLivroDoado />
        </section>
      </section>
      <Footer />
    </>
  );
}
