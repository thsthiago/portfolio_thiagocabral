import { Title } from '../Title';
import { ItemSkill } from '../ItemSkill';
import styles from '../../styles/components/Skills/Skills.module.css'

export function Skills() {
  return (
    <div id="skills" className={styles.container}>
      <Title>Skills</Title>
      <div className={styles.box}>
        <ItemSkill 
          skill="/icons/nextjs.svg" 
          porcetagem="30%"
          status="30%"
          title="Next JS | Estudando"
        />

        <ItemSkill 
          skill="/icons/reactjs.svg" 
          porcetagem="30%"
          status="30%"
          title="React JS | Estudando"
        />

        <ItemSkill 
          skill="/icons/html.svg" 
          porcetagem="80%"
          status="80%"
          title="HTML"
        />

        <ItemSkill 
          skill="/icons/javascript.svg" 
          porcetagem="70%"
          status="70%"
          title="Javascript"
        />

        <ItemSkill 
          skill="/icons/css.svg" 
          porcetagem="80%"
          status="80%"
          title="CSS"
        />

        <ItemSkill 
          skill="/icons/jquery.svg" 
          porcetagem="40%"
          status="40%"
          title="JQuery"
        />
      </div>

    </div>
  )
}