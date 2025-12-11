import { useState } from 'react'
import styled from 'styled-components'
import { Button } from 'react-aria-components'
import { LuArrowDownUp } from 'react-icons/lu'

import { Text } from './typography'

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral.extraDark};
  background-color: transparent;
  border: none;
  padding: 8px;
  border-radius: 42px;
  width: 100px;

  svg {
    color: ${({ theme }) => theme.colors.accent.medium};
    height: 16px;
    width: 16px;
    min-width: 16px;
  }

  p {
    white-space: nowrap;
    text-align: left;
    width: 100%;
    line-height: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.extraLight};
    background-color: ${({ theme }) => theme.colors.accent.medium};

    svg {
      color: ${({ theme }) => theme.colors.neutral.extraLight};
    }
  }
`

export function SortButton() {
  const [mode, setMode] = useState<'newest' | 'oldest'>('newest')

  function toggleMode() {
    setMode((prev) => (prev === 'newest' ? 'oldest' : 'newest'))
  }

  return (
    <StyledButton onClick={toggleMode}>
      <Text variant="caption">{mode === 'newest' ? 'Newest' : 'Oldest'} first</Text>
      <LuArrowDownUp />
    </StyledButton>
  )
}
