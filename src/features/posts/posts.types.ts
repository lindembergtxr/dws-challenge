import type { Author } from '../authors/authors.types'
import type { Category } from '../categories/categories.types'

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
