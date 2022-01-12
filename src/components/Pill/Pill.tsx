import { ReactNode } from 'react'
import styles from './Pill.module.scss'

type PillProps = {
  children: ReactNode
}

const Pill = ({ children }: PillProps) => {
  return <div className={styles.Pill}>{children}</div>
}

export default Pill
