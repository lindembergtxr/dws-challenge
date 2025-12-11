import type { Author } from '@/features/authors'
import type { Category } from '@/features/categories'

export type SortMode = 'newest' | 'oldest'

export interface ExternalPost {
  id: string
  authorId: string
  author: Author
  categories: Array<Category>
  title: string
  content: string
  thumbnail_url: string
  createdAt: string
  updatedAt: string
}

export interface InternalPost {
  id: string
  authorId: string
  author: Author
  categories: Array<Category>
  title: string
  content: string
  thumbnailUrl: string
  createdAt: string
  updatedAt: string
}
