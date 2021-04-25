import { useState } from 'react'
import styles from '../../styles/components/Header/index.module.css'
import { FaBolt, FaBook, FaHome, FaTools, FaUser } from 'react-icons/fa'
import { Link } from 'react-scroll'

export default function Header() {
  const [bars, setBars] = useState(false)

  function activebars() {
    bars ? setBars(false) : setBars(true)
  }

  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.navDesktop}>
          <nav>
            <a href="#">Home</a>
            <Link to="sobre" smooth={true} offset={-50} duration={500}>
              Sobre
            </Link>
            <Link to="skills" smooth={true} offset={-50} duration={500}>
              Skills
            </Link>
            <Link to="projetos" smooth={true} duration={500}>
              Projetos
            </Link>
            <Link to="contatos" smooth={true} duration={500}>
              Contatos
            </Link>
          </nav>
        </div>

        <div className={styles.navMobile}>
          <div onClick={() => activebars()} className={styles.iconBars}>
            <div
              className={`${styles.bars} ${
                bars ? styles.barsEffect : undefined
              }`}></div>
          </div>
          <nav className={bars ? styles.nav : undefined}>
            <a href="#" onClick={() => activebars()}>
              <FaHome className={styles.iconNav} />
              Home
            </a>
            <Link
              to="sobre"
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => activebars()}>
              <FaBook className={styles.iconNav} />
              Sobre
            </Link>

            <Link
              to="skills"
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => activebars()}>
              <FaBolt className={styles.iconNav} />
              Skills
            </Link>

            <Link
              to="projetos"
              smooth={true}
              duration={500}
              onClick={() => activebars()}>
              <FaTools className={styles.iconNav} />
              Projetos
            </Link>

            <Link
              to="contatos"
              smooth={true}
              duration={500}
              onClick={() => activebars()}>
              <FaUser className={styles.iconNav} />
              Contatos
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
