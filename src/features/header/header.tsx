import { useState } from 'react'
import styled from 'styled-components'

import { Grid, SearchInput } from '@/components'
import { media } from '@/styles'
import Logo from '@/assets/dentsu_logo.png'

const HeaderContainer = styled(Grid)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.lightest};
  padding-top: 12px;
  padding-bottom: 12px;
`

const HeaderLogo = styled.img`
  height: 20px;
  width: auto;
  grid-column: 1 / span 1;
  align-self: center;

  ${media.tablet} {
    height: 20px;
    grid-column: 1 / span 3;
  }

  ${media.desktop} {
    grid-column: 1 / span 7;
    height: 20px;
  }
`

const HeaderSearch = styled.div<{ $isExpanded: boolean }>`
  grid-column: ${({ $isExpanded }) => ($isExpanded ? '1 / span 4' : '2 / span 3')};
  align-self: center;
  justify-self: end;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;

  ${media.tablet} {
    grid-column: ${({ $isExpanded }) => ($isExpanded ? '1 / span 8' : '4 / span 5')};
  }

  ${media.desktop} {
    grid-column: 8 / span 5;
  }
`

export function Header() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <HeaderContainer as="header">
      {!isExpanded && <HeaderLogo alt="logo" src={Logo} />}

      <HeaderSearch $isExpanded={isExpanded}>
        <SearchInput isExpanded={isExpanded} setExpanded={(value) => setIsExpanded(value)} />
      </HeaderSearch>
    </HeaderContainer>
  )
}
