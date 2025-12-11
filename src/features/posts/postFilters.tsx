import styled from 'styled-components'

import { useAuthors, type Author } from '@/features/authors'
import { useCategories, type Category } from '@/features/categories'
import { Button, Text } from '@/components'
import { LuSlidersHorizontal } from 'react-icons/lu'
import { usePostsContext } from './posts.context'
import { useLayoutEffect, useState } from 'react'

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

const PostFiltersContentList = styled.ul`
  width: 100%;
  overflow: scroll;
  height: 240px;
  min-height: 0;
  padding-right: 16px;
`

const PostFiltersContentListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 4px 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.lightest};
`

const PostFiltersContentListItem = styled.li<{ $selected: boolean }>`
  width: 100%;
  padding: 11px 8px;

  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.accent.dark : theme.colors.neutral.darkest};

  background-color: ${({ theme, $selected }) =>
    $selected ? `${theme.colors.accent.light}0D` : 'transparent'};

  border: 1px solid
    ${({ theme, $selected }) =>
      $selected ? theme.colors.accent.dark : theme.colors.neutral.extraLight};

  border-radius: 8px;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.dark};
    cursor: pointer;
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export function PostFilters() {
  const { authors } = useAuthors()
  const { categories } = useCategories()

  const { selectedAuthors, selectedCategories, setSelectedAuthors, setSelectedCategories } =
    usePostsContext()

  const [localCategories, setCategories] = useState<Category[]>([])
  const [localAuthors, setAuthors] = useState<Author[]>([])

  console.log(authors, categories)

  function toggleAuthor(author: Author) {
    setAuthors((prev) => {
      const temp = [...prev]
      const index = temp.findIndex((a) => a.id === author.id)

      if (index === -1) temp.push(author)
      else temp.splice(index, 1)

      return temp
    })
  }

  function toggleCategory(category: Category) {
    setCategories((prev) => {
      const temp = [...prev]
      const index = temp.findIndex((c) => c.id === category.id)

      if (index === -1) temp.push(category)
      else temp.splice(index, 1)

      return temp
    })
  }

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

          <PostFiltersContentList>
            {categories.map((category) => (
              <PostFiltersContentListItemContainer key={category.id}>
                <PostFiltersContentListItem
                  $selected={localCategories.some((cat) => cat.id === category.id)}
                  onClick={() => toggleCategory(category)}
                >
                  <Text variant="bodySmall">{category.name}</Text>
                </PostFiltersContentListItem>
              </PostFiltersContentListItemContainer>
            ))}
          </PostFiltersContentList>
        </PostFiltersContentSection>

        <PostFiltersContentSection>
          <Text variant="bodyLarge" weight="semibold">
            Authors
          </Text>

          <PostFiltersContentList>
            {authors.map((author) => (
              <PostFiltersContentListItemContainer key={author.id}>
                <PostFiltersContentListItem
                  $selected={localAuthors.some((auth) => auth.id === author.id)}
                  onClick={() => toggleAuthor(author)}
                >
                  <Text variant="bodySmall">{author.name}</Text>
                </PostFiltersContentListItem>
              </PostFiltersContentListItemContainer>
            ))}
          </PostFiltersContentList>
        </PostFiltersContentSection>

        <Button variant="primary" onClick={applyFilters}>
          Apply filters
        </Button>
      </PostFiltersContent>
    </PostFiltersContainer>
  )
}
