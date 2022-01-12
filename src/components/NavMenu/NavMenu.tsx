import { useState, useEffect } from 'react'
import Link from 'next/link'

import { Button, ThemeChanger } from 'components'
import styles from './NavMenu.module.scss'
import { useScrollSpy } from 'hooks'

interface NavMenuProps {
  onClick?: () => void
}

const NavMenu = ({ onClick }: NavMenuProps) => {
  const [elements, setElements] = useState<Array<Element | null>>([])
  const [] = useScrollSpy(elements, {
    offset: 20,
    threshold: 0.2,
  })

  useEffect(() => {
    const ids = ['about-section', 'projects-section', 'skills-section']
    const widgetElements = ids.map((item) =>
      document.querySelector(`section[id=${item}]`)
    )
    setElements(widgetElements)
  }, [])

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
      <ThemeChanger />
    </nav>
  )
}

export default NavMenu
