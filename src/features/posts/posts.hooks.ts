import { useQuery } from '@tanstack/react-query'

import type { Category } from '@/features/categories'
import type { Author } from '@/features/authors'

import { getPostById, getPosts } from './posts.services'
import { postExternalToInternal } from './posts.adapters'
import type { InternalPost, SortMode } from './posts.types'

type UsePostsArgs = {
  sort: SortMode
  search?: string
  authors?: Author[]
  categories?: Category[]
}
export function usePosts({ sort, search, authors, categories }: UsePostsArgs) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
    retry: 2,
  })

  const normalizedSearch = search?.trim().toLowerCase()

  const posts = (data ?? [])
    .map(postExternalToInternal)
    .filter((post) => {
      if (normalizedSearch) {
        const haystack = `${post.title} ${post.content}`.toLowerCase()

        if (!haystack.includes(normalizedSearch)) return false
      }
      if (authors && authors.length > 0) {
        if (!authors.some((a) => a.id === post.author.id)) return false
      }
      if (categories && categories.length > 0) {
        if (!categories.some((c) => post.categories.some((pc) => pc.id === c.id))) {
          return false
        }
      }
      return true
    })
    .sort((postA, postB) => {
      if (sort === 'newest') return postA.createdAt < postB.createdAt ? 1 : -1
      return postA.createdAt < postB.createdAt ? -1 : 1
    })

  return { posts, isLoading, isError }
}

export function usePostDetails(id?: string | null) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPostById(id ?? ''),
    retry: 2,
    enabled: !!id,
  })

  const post: InternalPost | undefined = data ? postExternalToInternal(data) : undefined

  return { post, isLoading, isError }
}

export function useLatestPosts(currentPostId: string | undefined, amount: number) {
  const { posts } = usePosts({ sort: 'newest' as const })

  const latest = (posts ?? []).filter((post) => post.id !== currentPostId).slice(-amount)

  return latest
}
