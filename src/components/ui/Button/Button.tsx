import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

type ButtonProps<T extends ElementType> = {
  renderAs?: T
  isLoading?: boolean
  isCompleted?: boolean
  size?: 'Small' | 'Medium' | 'Large'
  children: ReactNode
} & ComponentPropsWithoutRef<T>

const Button = <T extends ElementType = 'button'>({
  renderAs,
  isLoading,
  isCompleted,
  size = 'Medium',
  children,
  ...rest
}: ButtonProps<T>): JSX.Element => {
  const Component = renderAs || 'button'

  return (
    <Component
      className={cn(
        styles.Button,
        styles[`Button${size}`],
        isLoading && styles.Loading
      )}
      as={renderAs}
      {...rest}
    >
      {isCompleted ? 'Complete' : children}
    </Component>
  )
}

export default Button
