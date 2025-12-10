import { useQuery } from '@tanstack/react-query'

import { getPostById, getPosts } from './posts.services'
import { postExternalToInternal } from './posts.adapters'
import type { InternalPost } from './posts.types'

export function usePosts() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
    retry: 2,
  })

  return { posts: (data ?? []).map(postExternalToInternal), isLoading, isError }
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
