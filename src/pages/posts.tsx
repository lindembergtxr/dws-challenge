import styled from 'styled-components'

import { PostCard, usePosts, usePostsContext, PostListHeader, PostFilters } from '@/features/posts'
import { Grid } from '@/components'
import { media } from '@/styles'
import { PostListEmpty } from '@/features/posts/postListEmpty'

const PostsContainer = styled(Grid)`
  padding-top: 20px;
  padding-bottom: 64px;

  ${media.tablet} {
    padding-bottom: 80px;
  }

  ${media.desktop} {
    padding-bottom: 120px;
  }
`

const PostsContentFilters = styled.div`
  display: none;

  ${media.tablet} {
    display: flex;
    grid-column: 1 / span 2;
  }

  ${media.desktop} {
    display: flex;
    grid-column: 1 / span 3;
  }
`

const PostsContent = styled.div`
  grid-column: 1 / -1;

  ${media.tablet} {
    grid-column: 3 / -1;
  }

  ${media.desktop} {
    grid-column: 4 / -1;
  }
`

const PostsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  overflow: hidden;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export function PostsPage() {
  const { sort, search, selectedCategories, selectedAuthors } = usePostsContext()

  const { posts } = usePosts({
    sort,
    search,
    categories: selectedCategories,
    authors: selectedAuthors,
  })

  return (
    <PostsContainer>
      <PostListHeader />

      <PostsContentFilters>
        <PostFilters />
      </PostsContentFilters>

      <PostsContent>
        <PostsList>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostsList>

        {posts.length === 0 && <PostListEmpty />}
      </PostsContent>
    </PostsContainer>
  )
}
