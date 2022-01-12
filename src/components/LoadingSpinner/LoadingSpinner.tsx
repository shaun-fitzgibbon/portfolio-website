import { ReactNode } from 'react'
import styles from './LoadingSpinner.module.scss'

type Props = {
  children: ReactNode
}

const LoadingSpinner = ({ children }: Props) => {
  return (
    <div className={styles['lds-ring']}>
      {children}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default LoadingSpinner
