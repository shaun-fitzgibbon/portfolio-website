import { FC } from 'react'
import styles from './Grid.module.scss'

const Grid: FC = function ({ children }) {
  return <div className={styles.Grid}>{children}</div>
}

export default Grid
