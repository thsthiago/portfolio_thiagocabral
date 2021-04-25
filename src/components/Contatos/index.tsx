import styles from '../../styles/components/Contatos/Contatos.module.css'
import { Title } from '../Title'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'

export function Contatos() {
  return (
    <div id="contatos" className={styles.container}>
      <Title>Contatos</Title>
      <div className={styles.contatosBackground}>
        <div>
          <img src="/contatos.svg" alt="" />
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.descricao}>
          <h2>Me mande um e-mail.</h2>
          <p>Logo logo eu respondo...haha😉</p>
          <a target="_blank" href="mailto:thiagocabral477@gmail.com">
            <span>Email:</span> thiagocabral477@gmail.com
          </a>
          <div className={styles.contatos}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/thsthiago-cabral/">
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/thsthiago">
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5511991147553">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
