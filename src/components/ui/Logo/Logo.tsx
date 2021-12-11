import { VFC } from 'react'
import Image from 'next/image'
import logo from '@static/logo.png'
import styles from './Logo.module.scss'

const Logo: VFC = () => {
  return (
    <div className={styles.Root}>
      <Image
        className={styles.Logo}
        src={logo}
        alt="logo"
        height="55px"
        width="55px"
      />
      <span className={styles.Highlight}>SHAUN</span> FITZGIBBON
    </div>
  )
}

export default Logo
