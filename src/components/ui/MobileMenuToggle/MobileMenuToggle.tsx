import cn from 'classnames'
import styles from './MobileMenuToggle.module.css'

interface ToggleProps {
  onClick: () => void
  isActive: boolean
}

const MobileMenuToggle = function ({ onClick, isActive }: ToggleProps) {
  const Bar = isActive ? cn(styles.Bar, styles.Active) : cn(styles.Bar)

  return (
    <button className={styles.Toggle} onClick={onClick}>
      <div className={Bar} />
      <div className={Bar} />
      <div className={Bar} />
    </button>
  )
}

export default MobileMenuToggle
