import styles from '../../styles/components/SectionInicial/index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function SectionInicial() {
  return (
    <section className={styles.containerPrincipal}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>Thiago Cabral</h1>
          <h3>Desenvolvedor Web</h3>
          <div className={styles.containerIcons}>
            <a className={styles.icon} target="_blank" href="https://github.com/thsthiago">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className={styles.icon} target="_blank" href="https://www.linkedin.com/in/thsthiago-cabral/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}