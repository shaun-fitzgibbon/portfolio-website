import { FC } from 'react'
import styles from './Backdrop.module.css'

interface Props {
  onClick: () => void
  isBackdropVisible: boolean
}

const Backdrop: FC<Props> = function ({
  children,
  isBackdropVisible,
  onClick,
}) {
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
