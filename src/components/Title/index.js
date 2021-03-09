import styles from '../../styles/components/Title/Title.module.css';

export function Title({children}) {
  return (
    <div className={styles.container}>
      <h2>{children}</h2>
    </div>
  )
}