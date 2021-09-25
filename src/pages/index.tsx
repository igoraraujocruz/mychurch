import Head from 'next/head';
import styles from './home.module.scss';
import YoutubeEmbed from "../components/YoutubeEmbed";

export default function Home() {
  return (
		<>
			<Head>
				<title> Home | MyChurch</title>
			</Head>
	    <main className={styles.contentContainer}>
				<section className={styles.slider}>
        { /*  <YoutubeEmbed embedId="OG_1A0-r6OY" />*/ }
				</section>

        <section className={styles.info}>
          </section>

        <div className={styles.about}>
          <h1>Quem somos.</h1>
          <p>CharajsodauhsiuCharajsodauhsiuCharajsodauhsiuCharajsodauhsiu
          CharajsodauhsiuCharajsodauhsiuCharajsodauhsiuChara
          jsodauhsiuCharajsodauhsiuCharajsodauhsiuCharajsodauhsiuC
          harajsodauhsiuCharajsodauhsiuCharajsodauhsiuCharajsodauh
          siuCharajsodauhsiuCharajsodauhsiuCharajsodauhsiu
          </p>
        </div>

        <div className={styles.map}>
          <h1>Como nos encontrar</h1>
          <p>CharajsodauhsiuCharajsodauhsiuCharajsodauhsiuCharajsodauhsiu
          CharajsodauhsiuCharajsodauhsiuCharajsodauhsiuChara
          jsodauhsiuCharajsodauhsiuCharajsodauhsiuCharajsodauhsiuC
          harajsodauhsiuCharajsodauhsiuCharajsodauhsiuCharajsodauh
          siuCharajsodauhsiuCharajsodauhsiuCharajsodauhsiu
          </p>
        </div>   

			</main>
		</>
  )
}