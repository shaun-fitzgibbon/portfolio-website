import { ReactNode } from 'react'
import styles from './Container.module.scss'

type Props = {
  children: ReactNode
}

const Container = function ({ children }: Props) {
  return <div className={styles.Container}>{children}</div>
}

export default Container
