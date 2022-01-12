import { ReactNode } from 'react'
import { Navbar, Footer } from 'components'
import styles from './Layout.module.scss'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className={styles.Header}>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
