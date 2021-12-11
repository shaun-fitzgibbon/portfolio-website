import { useState, useEffect, FC, useCallback } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { Logo, Container, NavMenu } from '@components/ui'
import { MobileMenuToggle } from '@components/ui'
import { useUI } from '@contexts'
import styles from './Navbar.module.scss'

const Navbar: FC = () => {
  const { isSidebarOpen, toggleSidebar } = useUI()
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 600
    )

    setPrevScrollPos(currentScrollPos)

    console.log(currentScrollPos)
    console.log(prevScrollPos)
  }, [prevScrollPos])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos, visible, handleScroll])

  return (
    <div
      className={cn(
        styles.Wrapper,
        scrolled && styles.Scrolled,
        visible && styles.visible
      )}
    >
      <Container>
        <div className={styles.Navbar}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div className={styles.DesktopOnly}>
            <NavMenu />
          </div>
          <div className={styles.MobileOnly}>
            <MobileMenuToggle
              onClick={toggleSidebar}
              isActive={isSidebarOpen}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
