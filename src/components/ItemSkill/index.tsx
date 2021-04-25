import styles from '../../styles/components/ItemSkill/ItemSkill.module.css'

export function ItemSkill({ ...dist }) {
  return (
    <div className={styles.container}>
      <div className={styles.skill}>
        <img src={dist.skill} />
        <span>{dist.title}</span>
      </div>
      <div className={styles.barra}>
        <span className={styles.barraDark} style={{ width: dist.porcetagem }}>
          <span>{dist.status}</span>
        </span>
        <span className={styles.barraLight}></span>
      </div>
    </div>
  )
}
