import styled from 'styled-components'

import { Text } from './typography'

const StyledChip = styled.div`
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.neutral.extraLight};
  width: 84px;
  min-width: 84px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 42px;
  overflow: hidden;

  & :first-child {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

type ChipProps = {
  text: string
}
export function Chip({ text }: ChipProps) {
  return (
    <StyledChip>
      <Text variant="caption">{text}</Text>
    </StyledChip>
  )
}
