import Link from 'next/link'
import cn from 'classnames'

import { Logo, Container, NavMenu, Sidebar, MobileMenuToggle } from 'components'
import { useUI } from 'contexts'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const {
    isPageScrolled,
    isNavbarVisible,
    isSidebarOpen,
    showNavbar,
    toggleSidebar,
    closeSidebar,
  } = useUI()

  const handleClick = () => {
    closeSidebar()
    showNavbar()
  }

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
            <NavMenu onClick={handleClick} />
          </div>
          <div className={styles.MobileOnly}>
            <MobileMenuToggle
              onClick={toggleSidebar}
              isActive={isSidebarOpen}
            />
            <Sidebar isSidebarVisible={isSidebarOpen} onClose={closeSidebar}>
              <NavMenu onClick={handleClick} />
            </Sidebar>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
