import styles from '../../styles/components/Projetos/Projetos.module.css';
import { ItemProjeto } from '../ItemProjeto';

export function Projetos() {
  
  return(
    <div id="projetos" className={styles.container}>
      <h2>Projetos</h2>

      <div className={styles.box}>
        <div className={styles.projetos}>
          <ItemProjeto title="Pomodoro.Dev" chave="0" img="/projetos/projeto 1/img1.svg"/>
          <ItemProjeto title="Site wdc" chave="1" img="/projetos/projeto 2/img1.svg" />
          <ItemProjeto title="Viaja Tour" chave="2" img="/projetos/projeto 3/img1.svg" />
          <ItemProjeto title="Cartour" chave="3" img="/projetos/projeto 4/img2.svg" />
        </div>
      </div>
    </div>
  )
};