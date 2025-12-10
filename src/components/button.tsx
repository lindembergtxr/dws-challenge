import type { ComponentProps, ReactNode } from 'react'
import { Button as AriaButton } from 'react-aria-components'
import type { IconType } from 'react-icons'
import styled from 'styled-components'

import { Text } from './typography'

type ButtonVariant = 'primary' | 'secondary'

const StyledButton = styled(AriaButton)<{ $variant: ButtonVariant; $width?: 'full' | 'fit' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  width: ${({ $width }) => ($width === 'full' ? '100%' : 'unset')};
  border: ${({ theme, $variant }) =>
    $variant === 'primary' ? 'none' : `1px solid ${theme.colors.secondary.light}`};
  color: ${({ theme, $variant }) =>
    $variant === 'primary' ? theme.colors.neutral.lightest : theme.colors.secondary.light};
  background-color: ${({ theme, $variant }) =>
    $variant === 'primary' ? theme.colors.secondary.medium : 'transparent'};

  &:hover {
    background-color: ${({ theme, $variant }) =>
      $variant === 'primary' ? theme.colors.secondary.dark : 'transparent'};
    border: ${({ theme, $variant }) =>
      $variant === 'primary' ? 'none' : `1px solid ${theme.colors.secondary.dark}`};
    color: ${({ theme, $variant }) =>
      $variant === 'primary' ? theme.colors.neutral.lightest : theme.colors.secondary.dark};
  }

  > svg {
    height: 1.5rem;
    width: 1.5rem;
    min-height: 1.5rem;
    min-width: 1.5rem;
  }
`

type ButtonProps = ComponentProps<typeof AriaButton> & {
  variant: ButtonVariant
  width?: 'full' | 'fit'
  Icon?: IconType
  children: ReactNode
}
export function Button({ variant, width, Icon, children, ...props }: ButtonProps) {
  return (
    <StyledButton $variant={variant} $width={width} {...props}>
      {Icon && <Icon />}
      <Text variant="bodyLarge" weight="semibold">
        {children}
      </Text>
    </StyledButton>
  )
}
