import { ReactNode } from 'react'
import cn from 'classnames'

import styles from './Sidebar.module.scss'

type SidebarProps = {
  children: ReactNode
  isSidebarVisible: boolean
  onClose: () => void
}

const Sidebar = function ({
  children,
  isSidebarVisible,
  onClose,
}: SidebarProps) {
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
