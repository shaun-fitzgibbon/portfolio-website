import Link from 'next/link'
import { Button } from '@components/ui'
import styles from './NavMenu.module.scss'

const NavMenu = () => {
  return (
    <nav className={styles.Menu}>
      <Link href="/">
        <a className={styles.Link}>Home</a>
      </Link>
      <Link href="/#about-section">
        <a className={styles.Link}>About</a>
      </Link>
      <Link href="/#projects-section">
        <a className={styles.Link}>Projects</a>
      </Link>
      <Link href="/#skills-section">
        <a className={styles.Link}>Skills</a>
      </Link>
      <Link href="/blog">
        <a className={styles.Link}>Blog</a>
      </Link>
      <Link href="#contact-section" passHref>
        <Button renderAs={'a'}>Contact</Button>
      </Link>
    </nav>
  )
}

export default NavMenu
