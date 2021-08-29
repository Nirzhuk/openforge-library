import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Openforge Library</title>
        <meta name="description" content="Openforge Library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="text-6xl text-shadow-bold text-white uppercase">
          Welcome to Openforge Visual Library
        </h1>


      </main>

      <footer className={styles.footer}>
        Please consider to be a patreon on
        <a href="https://www.patreon.com/masterworktools/posts" target="_blank" rel="noopener noreferrer">
          OpenForge&apos;s Patreon
        </a>
      </footer>
    </div>
  )
}

export default Home
