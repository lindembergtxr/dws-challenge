import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Text } from '@/components'
import type { GenericItem } from './posts.types'

const PostFiltersListContainer = styled.ul<{ $isExtended?: boolean }>`
  width: 100%;
  overflow: scroll;
  height: ${({ $isExtended }) => ($isExtended ? 'auto' : '240px')};
  flex: ${({ $isExtended }) => ($isExtended ? '1' : 'unset')};
  min-height: 0;
  padding-right: 16px;
`

const PostFiltersListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 0;
  width: 100%;
`

const PostFiltersListItem = styled.li<{ $selected: boolean }>`
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

type PostFiltersListProps<T extends GenericItem> = {
  values: T[]
  selectedValues: T[]
  isExtended?: boolean
  onChange: (selected: T[]) => void
}
export function PostFiltersList<T extends GenericItem>({
  values,
  selectedValues,
  isExtended,
  onChange,
}: PostFiltersListProps<T>) {
  const [selected, setSelected] = useState<T[]>(selectedValues)

  function toggleValue(item: T) {
    setSelected((prev) => {
      const temp = [...prev]
      const index = temp.findIndex((a) => a.id === item.id)

      if (index === -1) temp.push(item)
      else temp.splice(index, 1)

      return temp
    })
  }

  useEffect(() => {
    onChange(selected)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  return (
    <PostFiltersListContainer $isExtended={isExtended}>
      {values.map((item) => (
        <PostFiltersListItemContainer key={item.id}>
          <PostFiltersListItem
            $selected={selected.some((i) => i.id === item.id)}
            onClick={() => toggleValue(item)}
          >
            <Text variant="bodySmall">{item.name}</Text>
          </PostFiltersListItem>
        </PostFiltersListItemContainer>
      ))}
    </PostFiltersListContainer>
  )
}
