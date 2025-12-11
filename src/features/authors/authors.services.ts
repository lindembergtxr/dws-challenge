import { apiRequest } from '@/utils'

import type { Author } from './authors.types'

export async function getAuthors() {
  const { data } = await apiRequest<undefined, Author[]>('get', '/authors')

  return data
}
