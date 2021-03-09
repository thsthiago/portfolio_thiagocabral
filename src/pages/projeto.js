import { useContext, useEffect, useState } from "react"
import { ChallengesContext } from "../../contexts/ChallengesContext"
import styles from '../styles/components/DescricaoProjeto/DescricaoProjeto.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faLink, faTimes, faTools } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import Link from 'next/link'
import { Footer } from '../components/Footer'

export default function projeto() {
  const [img, setImg] = useState(0);
  const [description, setDescricao] = useState(false);
  const { key } = useContext(ChallengesContext);

  useEffect(() => {
    axios.get('./api/projetos')
      .then((res) => {
        setDescricao(res.data[key]); 
      })
  }, [])

  function before() {
    if(img <= 0) return setImg(description.images.length - 1);  
    setImg(img - 1);  
  }

  function next() {
    if(img == (description.images.length - 1)) return setImg(0);
    setImg(img + 1);
  }

  return description ? (
    <div className={styles.background}>
      <div className={styles.containerPricipal}>
        <div className={styles.voltar}>
          <Link href='/' >
            Voltar
          </Link>
        </div>

      
        <div className={`${styles.container} `}>

          <div className={styles.carrossel}>
            <img src={description.images[img]} />
            <span onClick={before} className={styles.left}>
              <img src="/projetos/arrowLeft.svg"/>
            </span>
            <span onClick={next} className={styles.right}>
              <img src="/projetos/arrowRight.svg"/>
            </span>
          </div>
          <div className={styles.descricao}>
            <h1 className={styles.titulo}>{description.titulo}</h1>
            <div className={styles.descricaoProjeto}>
              <h3>
                <FontAwesomeIcon className={styles.icon} icon={faBookOpen}/>
                Descrição o projeto:
              </h3>
              <p>{description.descricao}</p>
            </div>

            <div className={styles.tecnologias}>
              <h3>
                <FontAwesomeIcon className={styles.icon} icon={faTools}/>
                Tecnologias utilizadas
              </h3>
              <div className={styles.icons}>
                {
                  description.icons.map((item, index) => (
                    <div className={styles.tecnologia} key={index}>
                      <img src={item} />
                      <span className={styles.title}>{description.tecnologias[index]}</span>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className={styles.links}>
              <h3>
                <FontAwesomeIcon className={styles.icon} icon={faLink}/>
                Links:
                </h3>
              <p>
                <span>Repositório: </span>
                <a href={description.links[0]}>{description.links[0]}</a>
              </p>
              { description.links[1] &&
                <p>
                  <span>Projeto online: </span>
                  <a href={description.links[1]}>{description.links[1]}</a>
                </p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  )
}