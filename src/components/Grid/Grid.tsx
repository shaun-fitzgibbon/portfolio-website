import { ReactNode } from 'react'
import styled from 'styled-components'

interface GridProps {
  children: ReactNode
}

const StyledGrid = styled.div`
  display: grid;
  max-width: 100%;
  gap: 1.2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Grid = function ({ children }: GridProps) {
  return <StyledGrid>{children}</StyledGrid>
}

export default Grid
