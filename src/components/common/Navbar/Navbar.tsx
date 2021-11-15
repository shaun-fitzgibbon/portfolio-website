import Link from 'next/link'

import { Logo } from '@components/ui'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainmenu}>
        <Link href="/">
          <a className={styles.link}>
            <Logo />
          </a>
        </Link>

        <nav>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>
          <Link href="#about-section">
            <a className={styles.link}>About</a>
          </Link>
          <Link href="#projects-section">
            <a className={styles.link}>Projects</a>
          </Link>
          <Link href="#contact-section">
            <a className={styles.link}>Contact</a>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
