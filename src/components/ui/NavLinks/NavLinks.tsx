import Link from 'next/link'
import { FC } from 'react'
import { Button } from '..'
import styles from './NavLinks.module.css'

const NavLinks: FC = () => {
  return (
    <nav className={styles.menu}>
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="#about-section">
        <a className={styles.link}>About</a>
      </Link>
      <Link href="#projects-section">
        <a className={styles.link}>Projects</a>
      </Link>
      <Link href="#skills-section">
        <a className={styles.link}>Skills</a>
      </Link>
      <Button Component="a" href="#contact-section">
        Contact
      </Button>
    </nav>
  )
}

export default NavLinks
