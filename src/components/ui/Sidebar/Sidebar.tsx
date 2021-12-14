import { FC } from 'react'
import cn from 'classnames'

import styles from './Sidebar.module.scss'

interface SidebarProps {
  isSidebarVisible: boolean
  onClose: () => void
}

const Sidebar: FC<SidebarProps> = function ({
  children,
  isSidebarVisible,
  onClose,
}): JSX.Element {
  const onKeyDownSidebar = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Escape') {
      onClose()
    }
  }

  return (
    <aside
      className={
        isSidebarVisible
          ? cn(styles.sideDrawer, styles.visible)
          : styles.sideDrawer
      }
      onKeyDown={onKeyDownSidebar}
    >
      {children}
    </aside>
  )
}

export default Sidebar
