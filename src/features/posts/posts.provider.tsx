import { type PropsWithChildren, useState } from 'react'

import type { Category } from '@/features/categories'
import type { Author } from '@/features/authors'

import type { SortMode } from './posts.types'
import { Context } from './posts.context'

export const PostsContextProvider = ({ children }: PropsWithChildren) => {
  const [sort, setSort] = useState<SortMode>('newest')
  const [categories, setCategories] = useState<Category[]>([])
  const [authors, setAuthors] = useState<Author[]>([])
  const [search, setSearch] = useState('')

  return (
    <Context
      value={{ search, setSearch, sort, setSort, authors, setAuthors, categories, setCategories }}
    >
      {children}
    </Context>
  )
}
