import styled from 'styled-components'

import { SortButton, Text } from '@/components'
import { useCategories } from '@/features/categories'
import { useAuthors } from '@/features/authors'
import { media } from '@/styles'

import { PostFiltersChip } from './postFiltersChip'
import { usePostsContext } from './posts.context'

const HeaderContainer = styled.div`
  display: flex;
  grid-column: 1 / -1;
  align-items: center;
  justify-content: space-between;
  column-gap: 8px;
  margin-bottom: 24px;
`

const HeaderTitle = styled(Text)`
  display: none;
  flex: 1;
  width: 100%;
  white-space: nowrap;

  ${media.tablet} {
    display: flex;
  }
`

const HeaderFilters = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  flex: 1;
  width: 100%;

  ${media.tablet} {
    display: none;
  }
`

const HeaderSort = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;

  > p:first-of-type {
    display: none;
  }

    ${media.tablet} > p:first-of-type {
      display: none;
    }
  }

  p {
    line-height: 100%;
  }
`

export function PostListHeader() {
  const { categories } = useCategories()
  const { authors } = useAuthors()

  const { selectedAuthors, selectedCategories, setSelectedAuthors, setSelectedCategories } =
    usePostsContext()

  return (
    <HeaderContainer>
      <HeaderTitle variant="h2" weight="bold">
        DWS blog
      </HeaderTitle>

      <HeaderFilters>
        <PostFiltersChip
          title="Category"
          values={categories}
          selected={selectedCategories}
          onSubmit={setSelectedCategories}
        />

        <PostFiltersChip
          title="Author"
          values={authors}
          selected={selectedAuthors}
          onSubmit={setSelectedAuthors}
        />
      </HeaderFilters>

      <HeaderSort>
        <Text variant="caption" weight="semibold">
          Sort by:
        </Text>
        <SortButton />
      </HeaderSort>
    </HeaderContainer>
  )
}
