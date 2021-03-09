import styles from '../../styles/components/ItemProjeto/ItemProjeto.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import { ChallengesContext } from '../../../contexts/ChallengesContext'

export function ItemProjeto({...dist}) {
  const { setKey } = useContext(ChallengesContext);

  return(
    <>
      <div className={styles.container}>
        <img src={dist.img}/>
        <div className={styles.box}>
          <h3>{dist.title}</h3>
          <div>
            <Link href="/projeto">
              <button onClick={() => setKey(dist.chave)}>
                Ver projeto
              </button>
            </Link>
            <span className={styles.span1}></span>  
            <span className={styles.span2}></span>  
          </div>
        </div>
      </div>
    </>
  )
} 