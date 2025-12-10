import type { ReactNode } from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  display: block;
  overflow: hidden;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.neutral.lightest};
`

type CardProps = {
  children: ReactNode
}
export function Card({ children }: CardProps) {
  return <StyledCard>{children}</StyledCard>
}
