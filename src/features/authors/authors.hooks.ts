import { useQuery } from '@tanstack/react-query'

import { getAuthors } from './authors.services'

export function useAuthors() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['authors'],
    queryFn: () => getAuthors(),
    retry: 2,
  })

  return { authors: data ?? [], isLoading, isError }
}
