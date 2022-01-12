import Image from 'next/image'
import logo from 'static/images/logo.png'
import styles from './Logo.module.scss'

const Logo = () => {
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
