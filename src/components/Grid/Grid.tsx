import { ReactNode } from 'react'
import styles from './Grid.module.scss'

type GridProps = {
  children: ReactNode
}

const Grid = function ({ children }: GridProps) {
  return <div className={styles.Grid}>{children}</div>
}

export default Grid
