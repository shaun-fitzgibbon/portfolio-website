import Link from 'next/link'
// import { useState } from 'react'

import { Button } from '@components/ui'
import styles from './NavMenu.module.scss'
// import { useScrollspy } from '@utilities/ScrollSpy'

interface NavMenuProps {
  onClick?: () => void
}

const NavMenu = ({ onClick }: NavMenuProps) => {
  // const ids = [
  //   'about-section',
  //   'projects-section',
  //   'skills-section',
  //   'contact-section',
  // ]
  // const [elements, setElements] = useState([])
  // const [currentActiveIndex] = useScrollspy(elements, {
  //   root: document.querySelector('#demo-root'),
  //   offset: 20,
  // })

  return (
    <nav className={styles.Menu} onClick={onClick}>
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
