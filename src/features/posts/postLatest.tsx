import styled from 'styled-components'

import { Text } from '@/components'
import { useMediaQuery } from '@/hooks'
import { devices, media } from '@/styles'
import { useLatestPosts } from './posts.hooks'
import { PostCard } from './postCard'
import { useParams } from 'react-router-dom'

const PostLatestContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding-top: 40px;
  margin-top: 20px;
  border-top: 2px solid ${({ theme }) => theme.colors.neutral.lightest};
`

const PostLatestContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  row-gap: 16px;
  overflow: hidden;

  ${media.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    height: 425px;
    overflow: hidden;
  }

  ${media.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export function PostLatest() {
  const { id: postId } = useParams<{ id: string }>()

  const isMobile = useMediaQuery(`(max-width: calc(${devices.tablet} - 1px))`)
  const isTablet = useMediaQuery(`(max-width: calc(${devices.desktop} - 1px))`)

  const latest = useLatestPosts(postId, isTablet && !isMobile ? 2 : 3)

  return (
    <PostLatestContainer>
      <Text variant={isMobile ? 'h3' : 'h2'}>Latest articles</Text>

      <PostLatestContent>
        {latest.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostLatestContent>
    </PostLatestContainer>
  )
}
