import { Text } from '@/components'
import styled from 'styled-components'

const PostListEmptyContainer = styled.div`
  color: ${({ theme }) => theme.colors.neutral.dark};
  grid-columns: 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
  }
`

export function PostListEmpty() {
  return (
    <PostListEmptyContainer>
      <Text variant="bodySmall">
        No posts to show right now. Try adjusting your filters or check back later for new content.
      </Text>
    </PostListEmptyContainer>
  )
}
