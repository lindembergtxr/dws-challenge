import { useAuthors } from '../authors'
import { useCategories } from '../categories'

export function PostFilters() {
  const { authors } = useAuthors()
  const { categories } = useCategories()

  console.log(authors, categories)

  return <div>Filters</div>
}
