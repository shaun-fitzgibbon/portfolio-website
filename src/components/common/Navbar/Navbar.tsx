import { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { Logo, Container, NavMenu, Sidebar } from '@components/ui'
import { MobileMenuToggle } from '@components/ui'
import { useUI } from '@contexts'
import styles from './Navbar.module.scss'

const Navbar: FC = () => {
  const {
    isPageScrolled,
    isNavbarVisible,
    isSidebarOpen,
    toggleSidebar,
    closeSidebar,
  } = useUI()

  return (
    <div
      className={cn(
        styles.Wrapper,
        isPageScrolled && styles.Scrolled,
        isNavbarVisible && styles.visible
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
              <NavMenu onClick={closeSidebar} />
            </Sidebar>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
