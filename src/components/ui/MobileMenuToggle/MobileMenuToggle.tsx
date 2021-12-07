import { VFC } from 'react'
import cn from 'classnames'
import styles from './MobileMenuToggle.module.css'

interface ToggleProps {
  onClick: () => void
  isActive: boolean
}

const MobileMenuToggle: VFC<ToggleProps> = function ({ onClick, isActive }) {
  const lines = isActive ? cn(styles.line, styles.active) : cn(styles.line)

  return (
    <button className={styles['toggle-button']} onClick={onClick}>
      <div className={lines} />
      <div className={lines} />
      <div className={lines} />
    </button>
  )
}

export default MobileMenuToggle
