import { ReactNode } from 'react'
import styles from './Backdrop.module.css'

type Props = {
  children: ReactNode
  onClick: () => void
  isBackdropVisible: boolean
}

const Backdrop = function ({ children, isBackdropVisible, onClick }: Props) {
  return (
    <>
      {isBackdropVisible ? (
        <div className={styles.backdrop} onClick={onClick}>
          {children}
        </div>
      ) : (
        children
      )}
    </>
  )
}

export default Backdrop
