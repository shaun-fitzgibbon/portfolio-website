import { FC } from 'react'
import { Navbar } from '@components/common'
import { Footer } from '@components/common'

const Layout: FC = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
