import Head from 'next/head';
import styles from './home.module.scss';
import YoutubeEmbed from "../components/YoutubeEmbed";
import GoogleMaps from '../components/GoogleMaps';
import { History } from '../components/History';
import { BiChurch } from 'react-icons/bi';
import { GiBlackBook } from 'react-icons/gi';
import { CgYoutube } from 'react-icons/cg';
import { GrInstagram } from 'react-icons/gr';
import { AiOutlineFacebook } from 'react-icons/ai';
import Link from 'next/link';



export default function Home() {
  return (
		<>
			<Head>
				<title>MyChurch</title>
			</Head>
	    <main className={styles.contentContainer}>
				<section className={styles.slider}>

				</section>
        <div className={styles.container} id="menu">
          <div>
            <h1>Quem somos.</h1>
            <BiChurch size={50}/>
            <p>Uma igreja relevante, que faz-se necessário viver em total dependência de Deus</p>
          </div>
          <div>
            <a href="#history">
              <h1>Nossa História.</h1>
              <GiBlackBook size={50}/>
              <p>
                Um resumo sobre a nossa história e as nossas missões
              </p>
            </a>
          </div>
          <div>
            <a href="https://wa.me/55123456789" target="blank">
              <h1>Entre em contato</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              <p>
                Peça oração, converse com a igreja, estamos a disposição para ajudar.
              </p>
            </a>
          </div>
          <div className={styles.network}>
            <h1>Nossas Redes</h1>
              <section>
                
                <a href="https://youtube.com" target="blank">
                  <CgYoutube className={styles.yt} size={50}/>
                </a>

                <a href="https://instagram.com" target="blank"> 
                  <GrInstagram className={styles.insta} size={35} />
                </a>

                <a href="https://facebook.com" target="blank">
                  <AiOutlineFacebook className={styles.face} size={45} />
                </a>
              </section>
          </div>
        </div>
        <div className={styles.googleMaps} id="contact">
          <section>
            <h1>Dias e horários de cultos</h1>
            <p>Segunda-Feira: 19h</p>
            <p>Quarta-Feira: 19h</p>
            <p>Domingo: 19h</p>
          </section>
          <GoogleMaps />
          <YoutubeEmbed embedId="PfpEefKiG2I" />
        </div>

        <hr />
        <div id="history">
          <History />
          <hr />
        </div>
        <div className={styles.groups} id="groups">
        <h1>Faça parte dos nossos grupos</h1>
          <section>
          <span>
            <p>Toda semana temos um encontro com nossos grupos, oramos por nossas famílias, agradecemos pelas bençãos e buscamos melhorar como pessoa.</p>
          </span>
          </section>
        </div>
			</main>
		</>
  )
}