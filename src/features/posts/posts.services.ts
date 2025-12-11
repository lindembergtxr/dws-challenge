import { apiRequest } from '@/utils'

import type { ExternalPost } from './posts.types'

export async function getPosts() {
  const { data } = await apiRequest<undefined, ExternalPost[]>('get', '/posts')

  return data
}

export async function getPostById(id: string) {
  const { data } = await apiRequest<undefined, ExternalPost>('get', `/posts/${id}`)

  return data
}
