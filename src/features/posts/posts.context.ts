import { createContext, useContext, type Dispatch, type SetStateAction } from 'react'

import type { SortMode } from './posts.types'
import type { Category } from '../categories'
import type { Author } from '../authors'

export type PostsContextType = {
  sort: SortMode
  setSort: Dispatch<SetStateAction<SortMode>>
  categories: Category[]
  setCategories: Dispatch<SetStateAction<Category[]>>
  authors: Author[]
  setAuthors: Dispatch<SetStateAction<Author[]>>
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

export const Context = createContext<PostsContextType | undefined>(undefined)

export const usePostsContext = () => {
  const context = useContext(Context)

  if (!context) throw new Error('usePostsContext must be used within PostsContext')
  return context
}
