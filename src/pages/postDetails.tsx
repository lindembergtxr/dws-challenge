import styled from 'styled-components'
import { MdOutlineArrowBack } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'

import { Button, Grid } from '@/components'
import { usePostDetails, PostContent } from '@/features/posts'
import { media } from '@/styles'

const PostDetailsContainer = styled(Grid)`
  padding-top: 20px;
  padding-bottom: 20px;
`

const PostDetailsBack = styled.div`
  grid-column: 1 / span 4;
  grid-row: 1;

  ${media.tablet} {
    grid-column: 1 / span 2;
  }

  ${media.desktop} {
    grid-column: 1 / span 2;
  }
`

const PostDetailsContent = styled.div`
  grid-column: 1 / span 4;
  grid-row: 2;
  margin-top: 24px;

  ${media.tablet} {
    margin-top: 0px;
    grid-row: 1;
    grid-column: 3 / span 6;
  }

  ${media.desktop} {
    margin-top: 0px;
    grid-row: 1;
    grid-column: 3 / span 10;
  }
`

export function PostDetailsPage() {
  const { id } = useParams<{ id: string }>()

  const { post } = usePostDetails(id)

  const navigate = useNavigate()

  function back() {
    navigate('/posts')
  }

  if (!post) return null

  return (
    <PostDetailsContainer>
      <PostDetailsBack>
        <Button variant="secondary" Icon={MdOutlineArrowBack} onClick={back}>
          Back
        </Button>
      </PostDetailsBack>

      <PostDetailsContent
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 8, width: '100%' }}
      >
        <PostContent post={post} />
      </PostDetailsContent>
    </PostDetailsContainer>
  )
}
