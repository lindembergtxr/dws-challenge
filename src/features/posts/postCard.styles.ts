import styled from 'styled-components'

import { Text } from '@/components'
import { media } from '@/styles'

export const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 425px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  ${media.tablet} {
    width: 314px;
  }
`

export const PostCardImage = styled.img`
  width: 100%;
  height: 196px;
  object-fit: cover;
  flex-shrink: 0;
`

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 16px 15px 15px 15px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.neutral.extraLight};
  border-top: 0;
  border-radius: 0 0 16px 16px;
`

export const PostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  flex: 1;

  min-height: 0;
  width: 100%;
  overflow: hidden;
`

export const PostCardContentTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.neutral.darkest};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  overflow: hidden;
  text-overflow: ellipsis;

  word-break: break-word;
  width: 100%;

  flex-shrink: 0;
`

export const PostCardContentBody = styled.div`
  color: ${({ theme }) => theme.colors.neutral.darkest};
  width: 100%;
  flex: 1;
  overflow: hidden;

  > h1,
  h2,
  h3,
  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export const PostCardHeader = styled.div`
  color: ${({ theme }) => theme.colors.neutral.extraDark};

  display: flex;
  align-items: center;
  column-gap: 8px;
  height: 19px;
  width: 100%;
`

export const PostCardHeaderDot = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.medium};
  display: block;
  height: 5px;
  width: 5px;
  border-radius: 2.5px;
`

export const PostCardCategories = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  width: 100%;

  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
