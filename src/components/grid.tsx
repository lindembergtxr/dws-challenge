import styled from 'styled-components'

import { media } from '@/styles'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
  padding-inline: 16px;
  width: 100%;
  box-sizing: border-box;

  ${media.tablet} {
    grid-template-columns: repeat(8, 1fr);
    column-gap: 20px;
    padding-inline: 32px;
  }

  ${media.desktop} {
    grid-template-columns: repeat(12, 1fr);
    column-gap: 24px;
    padding-inline: 56px;
  }

  ${media.widescreen} {
    padding-inline: calc((100vw - 1280px) / 2);
  }
`
