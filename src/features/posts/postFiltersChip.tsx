import { Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components'

import { Button, Text } from '@/components'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MdOutlineClose, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { PostFiltersList } from './postFiltersList'
import type { GenericItem } from './posts.types'

const PostFiltersChipModalWrapper = styled(ModalOverlay)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 16px;

  button {
    outline: none;
    border: none;

    svg {
      height: 24px;
      width: 24px;
    }
  }
`

const PostFiltersChipModal = styled(Modal)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightest};

  .react-aria-Dialog {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

const PostFiltersChipTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.secondary.light}33;
  border: 1px solid ${({ theme }) => theme.colors.secondary.medium};
  color: ${({ theme }) => theme.colors.secondary.medium};

  border-radius: 42px;
  height: 32px;
  padding-left: 15px;
  padding-right: 11px;

  p {
    line-height: auto;
    white-space: nowrap;
    width: 100%;
  }

  svg {
    height: 24px;
    width: 24px;
    min-width: 24px;
  }
`

const PostFiltersChipContent = styled.div`
  width: 100%;
  padding-left: 16px;
  flex: 1;
`

const PostFiltersChipFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 16px;

  button {
    width: 100%;
  }
`

type PostFiltersChipProps<T> = {
  title: string
  values: T[]
  selected: T[]
  onSubmit: (values: T[]) => void
}
export function PostFiltersChip<T extends GenericItem>({
  title,
  values,
  selected,
  onSubmit,
}: PostFiltersChipProps<T>) {
  const [isOpen, setIsOpen] = useState(false)

  const [selectedValues, setSelectedValues] = useState<T[]>([])

  function submit() {
    onSubmit(selectedValues)
    setIsOpen(false)
  }

  function close() {
    setSelectedValues(selected)
    setIsOpen(false)
  }

  useEffect(() => {
    setSelectedValues(selected)
  }, [selected])

  return (
    <DialogTrigger isOpen={isOpen}>
      <PostFiltersChipTrigger onClick={() => setIsOpen(true)}>
        <Text variant="caption">{title}</Text>

        <MdOutlineKeyboardArrowDown />
      </PostFiltersChipTrigger>

      <PostFiltersChipModalWrapper>
        <PostFiltersChipModal>
          <Dialog>
            <DialogHeader>
              <Text variant="h3">{title}</Text>

              <button type="button" onClick={close}>
                <MdOutlineClose />
              </button>
            </DialogHeader>

            <PostFiltersChipContent>
              <PostFiltersList<T>
                values={values}
                selectedValues={selectedValues}
                isExtended
                onChange={setSelectedValues}
              />
            </PostFiltersChipContent>

            <PostFiltersChipFooter>
              <Button id="submit-button" variant="primary" onClick={submit}>
                Apply filters
              </Button>
            </PostFiltersChipFooter>
          </Dialog>
        </PostFiltersChipModal>
      </PostFiltersChipModalWrapper>
    </DialogTrigger>
  )
}
