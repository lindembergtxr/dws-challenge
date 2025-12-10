import styled from 'styled-components'

import { Avatar, Text } from '@/components'
import { parsePostDate } from '@/features/posts'

import type { Author } from './authors.types'

const AuthorInfoContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 100%;
`

const AuthorInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  color: ${({ theme }) => theme.colors.neutral.darkest};

  .date {
    color: ${({ theme }) => theme.colors.neutral.medium};
  }
`

type AuthorInfoProps = {
  author: Author
  createdAt: string
}
export function AuthorInfo({ author, createdAt }: AuthorInfoProps) {
  return (
    <AuthorInfoContainer>
      <Avatar fallback={author.name} url={author.profilePicture} />

      <AuthorInfoContent>
        <Text variant="bodySmall">
          Written by: <strong>{author.name}</strong>
        </Text>

        <Text className="date" variant="bodySmall">
          {parsePostDate(createdAt)}
        </Text>
      </AuthorInfoContent>
    </AuthorInfoContainer>
  )
}
