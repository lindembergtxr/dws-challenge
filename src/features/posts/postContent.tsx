import styled from 'styled-components'

import { Text } from '@/components'
import { AuthorInfo } from '@/features/authors'
import { useMediaQuery } from '@/hooks'
import { devices, media } from '@/styles'

import type { InternalPost } from './posts.types'
import { PostLatest } from './postLatest'

const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding-bottom: 64px;

  ${media.tablet} {
    padding-bottom: 80px;
  }

  ${media.desktop} {
    padding-bottom: 120px;
  }
`

export const PostContentTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.neutral.darkest};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  overflow: hidden;
  text-overflow: ellipsis;

  word-break: break-word;
  width: 100%;

  flex-shrink: 0;
`

export const PostContentImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;
`

export const PostContentText = styled(Text)`
  white-space: pre-wrap;
`

type PostContentProps = {
  post: InternalPost
}

export function PostContent({ post }: PostContentProps) {
  const isMobile = useMediaQuery(`(max-width: calc(${devices.tablet} - 1px))`)

  return (
    <PostContentContainer>
      <PostContentTitle variant={isMobile ? 'h2' : 'h1'}>{post.title}</PostContentTitle>

      <AuthorInfo author={post?.author} createdAt={post.createdAt} />

      <PostContentImage alt="post thumbnail" src={post.thumbnailUrl} />

      <PostContentText variant="bodyLarge">{post.content}</PostContentText>

      <PostLatest />
    </PostContentContainer>
  )
}
