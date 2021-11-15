import Image from 'next/image'
import styles from './Logo.module.css'
import logo from '../../../../public/logo.png'

const Logo = () => {
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
