import {
  ElementType,
  ReactNode,
  forwardRef,
  Ref,
  ComponentPropsWithRef,
} from 'react'
import cn from 'classnames'
import s from './Button.module.scss'

type ButtonProps<T extends ElementType> = {
  renderAs?: T
  isLoading?: boolean
  isCompleted?: boolean
  size?: 'Small' | 'Medium' | 'Large'
  fullwidth?: boolean
  children: ReactNode
} & ComponentPropsWithRef<T>

const Button = <T extends ElementType = 'button'>(
  {
    renderAs,
    isLoading,
    isCompleted,
    size = 'Medium',
    fullwidth = false,
    children,
    ...rest
  }: ButtonProps<T>,
  ref: Ref<T>
): JSX.Element => {
  const Component = renderAs || 'button'

  return (
    <Component
      className={cn(
        s.Button,
        s[`Button${size}`],
        isLoading && s.Loading,
        fullwidth && s.Fullwidth
      )}
      ref={ref}
      as={renderAs}
      {...rest}
    >
      {isLoading ? (
        <span className={s.ButtonText}>Loading...</span>
      ) : isCompleted ? (
        'Complete'
      ) : (
        children
      )}
    </Component>
  )
}

export default forwardRef(Button)
