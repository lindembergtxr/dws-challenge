import { useRef } from 'react'

import { Card, Chip, Text } from '@/components'
import { useDynamicClamp } from '@/hooks'

import { parsePostDate } from './posts.utils'
import type { InternalPost } from './posts.types'
import * as Styles from './postCard.styles'

type PostCardProps = {
  post: InternalPost
}
export function PostCard({ post }: PostCardProps) {
  const contentRef = useRef<HTMLHeadingElement | HTMLParagraphElement | null>(null)

  useDynamicClamp(contentRef)

  return (
    <Card>
      <Styles.PostCardWrapper>
        <Styles.PostCardImage src={post.thumbnailUrl} alt={post.id} />

        <Styles.PostCardContainer>
          <Styles.PostCardHeader>
            <Text variant="caption">{parsePostDate(post.createdAt)}</Text>
            <Styles.PostCardHeaderDot />
            <Text variant="caption">{post.author.name ?? 'Unknown author'}</Text>
          </Styles.PostCardHeader>

          <Styles.PostCardContent>
            <Styles.PostCardContentTitle variant="h3">
              {post.title} dasd asas d sa lorem ipsum
            </Styles.PostCardContentTitle>

            <Styles.PostCardContentBody ref={contentRef} variant="bodySmall">
              {post.content}
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
