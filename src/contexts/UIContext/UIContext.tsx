import {
  createContext,
  FC,
  useContext,
  useMemo,
  useReducer,
  useCallback,
} from 'react'

export interface StateModifiers {
  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
  closeSidebarIfPresent: () => void
}

export interface StateValues {
  isSidebarOpen: boolean
}

type State = StateValues & StateModifiers

const initialState = {
  isSidebarOpen: false,
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

type Action = { type: 'OPEN_SIDEBAR' | 'CLOSE_SIDEBAR' }

function uiReducer(state: StateValues, action: Action) {
  switch (action.type) {
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
