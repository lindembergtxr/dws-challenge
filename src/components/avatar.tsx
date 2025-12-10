import { MdPerson } from 'react-icons/md'
import styled from 'styled-components'

const AvatarContainer = styled.div<{ $hasUrl: boolean }>`
  height: 56px;
  width: 56px;
  min-width: 56px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, $hasUrl }) =>
    $hasUrl ? theme.colors.neutral.lightest : theme.colors.secondary.medium};

  svg {
    height: 32px;
    width: 32px;
    color: ${({ theme }) => theme.colors.neutral.lightest};
  }
`

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  height: 56px;
  width: 56px;
`

type AvatarProps = {
  url: string
  fallback?: string
}
export function Avatar({ url, fallback }: AvatarProps) {
  return (
    <AvatarContainer $hasUrl={!!url}>
      {url ? <AvatarImage alt={fallback} src={url} /> : <MdPerson />}
    </AvatarContainer>
  )
}
