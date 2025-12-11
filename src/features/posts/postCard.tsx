import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { Card, Chip, Text } from '@/components'
import { useDynamicClamp } from '@/hooks'

import { parsePostDate } from './posts.utils'
import type { InternalPost } from './posts.types'
import * as Styles from './postCard.styles'

type PostCardProps = {
  post: InternalPost
}
export function PostCard({ post }: PostCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLHeadingElement | HTMLParagraphElement | null>(null)

  useDynamicClamp(containerRef, contentRef)

  const navigate = useNavigate()

  function openPost() {
    navigate(`/posts/${post.id}`)
  }

  return (
    <Card>
      <Styles.PostCardWrapper onClick={() => openPost()}>
        <Styles.PostCardImage src={post.thumbnailUrl} alt={post.id} />

        <Styles.PostCardContainer>
          <Styles.PostCardHeader>
            <Text variant="caption">{parsePostDate(post.createdAt)}</Text>
            <Styles.PostCardHeaderDot />
            <Text variant="caption">{post.author.name ?? 'Unknown author'}</Text>
          </Styles.PostCardHeader>

          <Styles.PostCardContent>
            <Styles.PostCardContentTitle variant="h3">{post.title}</Styles.PostCardContentTitle>

            <Styles.PostCardContentBody ref={containerRef}>
              <Text ref={contentRef} variant="bodySmall">
                {post.content}
              </Text>
            </Styles.PostCardContentBody>
          </Styles.PostCardContent>

          {post.categories.length > 0 && (
            <Styles.PostCardCategories>
              {post.categories.map((category) => (
                <Chip key={category.id} text={category.name} />
              ))}
            </Styles.PostCardCategories>
          )}
        </Styles.PostCardContainer>
      </Styles.PostCardWrapper>
    </Card>
  )
}
