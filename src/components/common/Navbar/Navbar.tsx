import { useState, useMemo, useEffect, useCallback, FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import debounce from 'lodash.debounce'

import { Logo, Container, NavMenu, Sidebar } from '@components/ui'
import { MobileMenuToggle } from '@components/ui'
import { useUI } from '@contexts'
import styles from './Navbar.module.scss'

const Navbar: FC = () => {
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useUI()
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
    console.log(prevScrollPos)
    console.log(currentScrollPos)
  }, [prevScrollPos])

  const debouncedHandleScroll = useMemo(
    () => debounce(handleScroll, 300),
    [handleScroll]
  )

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll)
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll)
      debouncedHandleScroll.cancel
    }
  }, [prevScrollPos, visible, debouncedHandleScroll])

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
            <Sidebar isSidebarVisible={isSidebarOpen} onClose={closeSidebar}>
              {' '}
              <NavMenu onClick={closeSidebar} />
            </Sidebar>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
