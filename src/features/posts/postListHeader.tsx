import styled from 'styled-components'

import { SortButton, Text } from '@/components'
import { media } from '@/styles'

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
  return (
    <HeaderContainer>
      <HeaderTitle variant="h2" weight="bold">
        DWS blog
      </HeaderTitle>

      <HeaderSort>
        <Text variant="caption" weight="semibold">
          Sort by:
        </Text>
        <SortButton />
      </HeaderSort>
    </HeaderContainer>
  )
}
