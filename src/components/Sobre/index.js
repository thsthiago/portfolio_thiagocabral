import styles from '../../styles/components/Sobre/Sobre.module.css';
import { Title } from '../Title';

export function Sobre()  {
  return (
    <div id="sobre" className={styles.container}>
      <Title>Sobre mim</Title>
      <div className={styles.sobreBackground}>
        <div><img src="/sobre.svg" alt=""/></div>
      </div>
      <div className={styles.box}>
        <div className={styles.descricao}>
          <p>
            Desenvolvedor Web Front-end, apaixonado por <strong>tecnologia</strong>, 
            <strong> café</strong>, <strong>games</strong> e muita <strong>música</strong>.
            <br />
            <br />
            Cursando <strong>Análise e Desenvolvimento de Sistemas</strong> pela Universidade Cidade de São Paulo.
            <br />
            <br />
            Em busca de uma oportunidade de <strong>estágio como Desenvolvedor Front-end</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}