import { ReactNode, ElementType, HTMLAttributes } from 'react'
import styled from 'styled-components'

interface ContainerProps {
  children: ReactNode
  element?: ElementType<HTMLAttributes<HTMLElement>>
}

const StyledComponent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 0.8rem;

  /*  height: 100%; */
  margin: 0 auto;

  @media screen and (min-width: 600px) {
    padding: 0 2rem;
  }
`

const Container = ({
  children,
  element: Component = 'div',
}: ContainerProps) => {
  return <StyledComponent as={Component}>{children}</StyledComponent>
}

export default Container
