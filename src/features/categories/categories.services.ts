import { apiRequest } from '@/utils'

import type { Category } from './categories.types'

export async function getCategories() {
  const { data } = await apiRequest<undefined, Category[]>('get', '/categories')

  return data
}
