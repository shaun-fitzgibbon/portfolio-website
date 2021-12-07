import {
  ButtonHTMLAttributes,
  ComponentType,
  FC,
  HTMLAttributes,
  ReactNode,
} from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
  Component?: string | ComponentType<HTMLAttributes<HTMLElement>>
  isLoading?: boolean
  href?: string
}

const Button: FC<ButtonProps> = ({
  children,
  isLoading = false,
  Component = 'button',
  ...rest
}) => {
  return (
    <Component className={styles.Button} type="button" {...rest}>
      {children}
      {isLoading ? '...' : null}
    </Component>
  )
}

export default Button
