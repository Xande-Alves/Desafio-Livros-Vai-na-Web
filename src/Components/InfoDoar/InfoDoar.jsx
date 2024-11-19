import './InfoDoar.css';
import frame from '../../assets/Frame.png'

export default function InfoDoar() {
  return (
    <>
      <section className="sectionForm">
        <section className='sectionFrameText'>
          <img src={frame} alt="Figura de um livro aberto." />
          <h2>Informações do Livro</h2>
        </section>
        <section className='sectionInputDoar'>
          <input className='inputDoar' type="text" placeholder="Título" />
          <input className='inputDoar' type="text" placeholder="Categoria" />
          <input className='inputDoar' type="text" placeholder="Autor" />
          <input className='inputDoar' type="text" placeholder="Link da Imagem" />
        </section>
        <button className='btnDoar'>Doar</button>
      </section>
    </>

  )
}
