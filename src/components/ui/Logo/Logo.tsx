import { VFC } from 'react'
import Image from 'next/image'
import logo from '@static/logo.png'
import styles from './Logo.module.css'

const Logo: VFC = () => {
  return (
    <div className={styles.root}>
      <Image
        className={styles.logo}
        src={logo}
        alt="logo"
        height="55px"
        width="55px"
      />
      <span className={styles.highlight}>SHAUN</span> FITZGIBBON
    </div>
  )
}

export default Logo
