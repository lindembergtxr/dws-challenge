import { useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import { LuSlidersHorizontal } from 'react-icons/lu'

import { useAuthors, type Author } from '@/features/authors'
import { useCategories, type Category } from '@/features/categories'
import { Button, Text } from '@/components'

import { usePostsContext } from './posts.context'
import { PostFiltersList } from './postFiltersList'

const PostFiltersContainer = styled.div`
  height: fit-content;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.neutral.extraLight};
  background-color: ${({ theme }) => theme.colors.neutral.lightest};
  border-radius: 16px;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const PostFiltersHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;

  svg {
    width: 20px;
    min-width: 20px;
    height: 20px;
  }
`

const PostFiltersContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  button {
    margin: 0 16px;
  }
`

const PostFiltersContentSection = styled.div`
  width: 100%;
  overflow: hidden;
  padding-left: 16px;
`

export function PostFilters() {
  const { authors } = useAuthors()
  const { categories } = useCategories()

  const { selectedAuthors, selectedCategories, setSelectedAuthors, setSelectedCategories } =
    usePostsContext()

  const [localCategories, setCategories] = useState<Category[]>([])
  const [localAuthors, setAuthors] = useState<Author[]>([])

  function applyFilters() {
    setSelectedAuthors(localAuthors)
    setSelectedCategories(localCategories)
  }

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCategories(selectedCategories)
  }, [selectedCategories])

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAuthors(selectedAuthors)
  }, [selectedAuthors])

  return (
    <PostFiltersContainer>
      <PostFiltersHeader>
        <LuSlidersHorizontal />
        <Text variant="h3" weight="semibold">
          Filters
        </Text>
      </PostFiltersHeader>

      <PostFiltersContent>
        <PostFiltersContentSection>
          <Text variant="bodyLarge" weight="semibold">
            Categories
          </Text>

          <PostFiltersList<Category>
            values={categories}
            selectedValues={localCategories}
            onChange={setCategories}
          />
        </PostFiltersContentSection>

        <PostFiltersContentSection>
          <Text variant="bodyLarge" weight="semibold">
            Authors
          </Text>

          <PostFiltersList<Author>
            values={authors}
            selectedValues={localAuthors}
            onChange={setAuthors}
          />
        </PostFiltersContentSection>

        <Button variant="primary" onClick={applyFilters}>
          Apply filters
        </Button>
      </PostFiltersContent>
    </PostFiltersContainer>
  )
}
