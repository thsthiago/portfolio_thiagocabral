import Head from 'next/head'
import { Contatos } from '../components/Contatos'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import { Projetos } from '../components/Projetos'
import SectionInicial from '../components/SectionInicial'
import { Skills } from '../components/Skills'
import { Sobre } from '../components/Sobre'
import styles from '../styles/Home.module.css'
import { FaArrowUp } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thiago Cabral | Desenvolvedor Web</title>
      </Head>
      <Header />
      <SectionInicial />
      <Sobre />
      <Skills />
      <Projetos />
      <Contatos />
      <Footer />
      <button onClick={() => scroll.scrollToTop()} className={styles.top}>
        <FaArrowUp />
      </button>
    </div>
  )
}
