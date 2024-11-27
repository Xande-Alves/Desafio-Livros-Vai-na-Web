import s from './footer.module.scss';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/Twitter.png';
import youtube from '../../assets/youtube.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';

export default function Footer() {
  return (
    <footer>
      <section className={s.footerTop}>
        <p>4002-8922</p>
        <nav className={s.navIcons}>
          <a href="https://pt-br.facebook.com/" target="_blank">
            <img src={facebook} alt="Logo do Facebook." />
          </a>
          <a href="https://x.com/?lang=pt-br" target="_blank">
            <img src={twitter} alt="Logo do Twitter." />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtube} alt="Logo do Youtube." />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src={linkedin} alt="Logo do LinkedIn." />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} alt="Logo do Instagram." />
          </a>
        </nav>
      </section>
      <section className={s.footerBottom}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  );
}
