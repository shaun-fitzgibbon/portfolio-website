import { FC } from 'react'
import Link from 'next/link'

import { Logo, Container, NavLinks } from '@components/ui'
import { MobileMenuToggle } from '@components/ui'
import { useUI } from '@contexts'
import styles from './Navbar.module.css'

const Navbar: FC = () => {
  const { displaySidebar, toggleSidebar } = useUI()
  return (
    <div className={styles.navWrapper}>
      <Container>
        <div className={styles.navContent}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div className={styles.navMenu}>
            <NavLinks />
          </div>
          <MobileMenuToggle onClick={toggleSidebar} isActive={displaySidebar} />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
