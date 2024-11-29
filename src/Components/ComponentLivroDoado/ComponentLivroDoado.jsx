import s from './ComponentLivroDoado.module.scss';
import livro1 from '../../assets/livro1.png';

export default function ComponentLivroDoado() {
  return (
    <section className={s.livroDoado}>
      <img
        src={livro1}
        alt="Imagem do livro O Protagonista, de Susanne Andrade"
      />
      <section>
        <p>O Protagonista</p>
        <p>Susanne Andrade</p>
        <p>Ficção</p>
      </section>
    </section>
  );
}
