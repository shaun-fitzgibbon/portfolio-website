import { FC } from 'react'
import { Navbar } from '@components/common'
import { Footer } from '@components/common'
import styles from './Layout.module.scss'

const Layout: FC = ({ children }) => {
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
