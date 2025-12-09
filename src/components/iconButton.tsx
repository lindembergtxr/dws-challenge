import type { ComponentProps } from 'react'
import { Button as AriaButton } from 'react-aria-components'
import type { IconType } from 'react-icons'
import styled from 'styled-components'

const StyledButton = styled(AriaButton)`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  color: ${({ theme }) => theme.colors.neutral.lightest};
  background-color: ${({ theme }) => theme.colors.secondary.medium};

  &:focus,
  &:hover {
    outline: 4px solid ${({ theme }) => theme.colors.neutral.light};
  }

  > svg {
    height: 1.5rem;
    width: 1.5rem;
    min-height: 1.5rem;
    min-width: 1.5rem;
  }
`

type IconButtonProps = ComponentProps<typeof AriaButton> & {
  Icon?: IconType
}
export function IconButton({ Icon, ...props }: IconButtonProps) {
  return <StyledButton {...props}>{Icon && <Icon />}</StyledButton>
}
