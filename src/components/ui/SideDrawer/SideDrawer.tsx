import { FC } from 'react'
import cn from 'classnames'

import styles from './SideDrawer.module.css'

interface SideDrawerProps {
  isSideDrawerVisible: boolean
  onClose: () => void
}

const SideDrawer: FC<SideDrawerProps> = function ({
  children,
  isSideDrawerVisible,
  onClose,
}) {
  const onKeyDownSidebar = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Escape') {
      onClose()
    }
  }

  return (
    <div className={styles.wrapper} onKeyDown={onKeyDownSidebar}>
      <aside
        className={
          isSideDrawerVisible
            ? cn(styles.sideDrawer, styles.visible)
            : styles.sideDrawer
        }
      >
        {children}
      </aside>
    </div>
  )
}

export default SideDrawer
