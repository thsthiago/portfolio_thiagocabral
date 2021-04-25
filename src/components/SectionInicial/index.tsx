import styles from '../../styles/components/SectionInicial/index.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function SectionInicial() {
  return (
    <section className={styles.containerPrincipal}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>Thiago Cabral</h1>
          <h3>Desenvolvedor Web</h3>
          <div className={styles.containerIcons}>
            <a
              className={styles.icon}
              target="_blank"
              href="https://github.com/thsthiago">
              <FaGithub />
            </a>
            <a
              className={styles.icon}
              target="_blank"
              href="https://www.linkedin.com/in/thsthiago-cabral/">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
