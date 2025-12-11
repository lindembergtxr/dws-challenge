import { useQuery } from '@tanstack/react-query'

import { getCategories } from './categories.services'

export function useCategories() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
    retry: 2,
  })

  return { categories: data ?? [], isLoading, isError }
}
