import {
  createContext,
  FC,
  useContext,
  useMemo,
  useReducer,
  useCallback,
  useEffect,
  useState,
} from 'react'
import debounce from 'lodash.debounce'

export interface StateModifiers {
  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
  closeSidebarIfPresent: () => void
}

export interface StateValues {
  isSidebarOpen: boolean
  isNavbarVisible: boolean
  isPageScrolled: boolean
}

type State = StateValues & StateModifiers

const initialState = {
  isSidebarOpen: false,
  isNavbarVisible: true,
  isPageScrolled: false,
}

const stateModifires = {
  openSidebar: () => null,
  closeSidebar: () => null,
  toggleSidebar: () => null,
  closeSidebarIfPresent: () => null,
}

const UIContext = createContext<State>({
  ...initialState,
  ...stateModifires,
})

UIContext.displayName = 'UIContext'

type Action = {
  type:
    | 'SHOW_NAVBAR'
    | 'REMOVE_NAVBAR'
    | 'SET_PAGE_SCROLLED'
    | 'REMOVE_PAGE_SCROLLED'
    | 'OPEN_SIDEBAR'
    | 'CLOSE_SIDEBAR'
}

function uiReducer(state: StateValues, action: Action) {
  switch (action.type) {
    case 'SHOW_NAVBAR': {
      return {
        ...state,
        isNavbarVisible: true,
      }
    }

    case 'REMOVE_NAVBAR': {
      return {
        ...state,
        isNavbarVisible: false,
      }
    }
    case 'SET_PAGE_SCROLLED': {
      return {
        ...state,
        isPageScrolled: true,
      }
    }
    case 'REMOVE_PAGE_SCROLLED': {
      return {
        ...state,
        isPageScrolled: false,
      }
    }

    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        isSidebarOpen: true,
      }
    }

    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        isSidebarOpen: false,
      }
    }
  }
}

export const UIProvider: FC = ({ children }, ...rest) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)
  const [prevScrollPosition, setPrevScrollPosition] = useState(0)

  const openSidebar = useCallback(
    () => dispatch({ type: 'OPEN_SIDEBAR' }),
    [dispatch]
  )

  const closeSidebar = useCallback(
    () => dispatch({ type: 'CLOSE_SIDEBAR' }),
    [dispatch]
  )

  const toggleSidebar = useCallback(
    () =>
      state.isSidebarOpen
        ? dispatch({ type: 'CLOSE_SIDEBAR' })
        : dispatch({ type: 'OPEN_SIDEBAR' }),
    [dispatch, state.isSidebarOpen]
  )

  const closeSidebarIfPresent = useCallback(
    () => state.isSidebarOpen && dispatch({ type: 'CLOSE_SIDEBAR' }),
    [dispatch, state.isSidebarOpen]
  )

  const handleScroll = useCallback(() => {
    const currentScrollPosition = window.scrollY

    if (currentScrollPosition > 0) {
      dispatch({ type: 'SET_PAGE_SCROLLED' })
    } else {
      dispatch({ type: 'REMOVE_PAGE_SCROLLED' })
    }

    if (
      (prevScrollPosition > currentScrollPosition &&
        prevScrollPosition - currentScrollPosition > 70) ||
      currentScrollPosition < 600
    ) {
      dispatch({ type: 'SHOW_NAVBAR' })
    } else {
      dispatch({ type: 'REMOVE_NAVBAR' })
    }

    setPrevScrollPosition(currentScrollPosition)
    console.log(prevScrollPosition)
    console.log(currentScrollPosition)
  }, [prevScrollPosition])

  const debouncedHandleScroll = useMemo(
    () => debounce(handleScroll, 300),
    [handleScroll]
  )

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll)
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll)
      debouncedHandleScroll.cancel
    }
  }, [prevScrollPosition, state.isNavbarVisible, debouncedHandleScroll])

  const value = useMemo(() => {
    return {
      ...state,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent,
    }
  }, [state, openSidebar, closeSidebar, toggleSidebar, closeSidebarIfPresent])

  return (
    <UIContext.Provider value={value} {...rest}>
      {children}
    </UIContext.Provider>
  )
}

export const useUI = () => {
  const context = useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}
