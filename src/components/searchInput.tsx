import { useEffect, useRef, useState } from 'react'
import { Button } from 'react-aria-components'
import styled from 'styled-components'
import { MdOutlineArrowBack, MdOutlineClose, MdOutlineSearch } from 'react-icons/md'

import { useMediaQuery } from '@/hooks'
import { devices, media } from '@/styles'

import { IconButton } from './iconButton'

const SearchInputContainer = styled.div<{ $isExpanded: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.neutral.lightest};
  color: ${({ theme }) => theme.colors.neutral.extraDark};
  background-color: white;
  padding: ${({ $isExpanded }) => ($isExpanded ? '0 8px' : '0px')};
  height: 40px;
  width: ${({ $isExpanded }) => ($isExpanded ? '100%' : '40px')};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  -webkit-transition: width 0.25s ease-out;
  -moz-transition: width 0.25s ease-out;
  -o-transition: width 0.25s ease-out;
  transition: width 0.25s ease-out;

  input[type='text'] {
    flex: 1;
    outline: none;
    border: none;
    padding: 8px;
    width: 100%;
    height: 100%;
    background-color: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.colors.neutral.light};
    }
  }

  ${media.tablet} {
    border: 1px solid ${({ theme }) => theme.colors.neutral.lightest};
    color: ${({ theme }) => theme.colors.neutral.extraDark};
    background-color: white;
    padding: 7px;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:has(input:focus) {
    border-color: ${({ theme }) => theme.colors.accent.medium};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.medium};
  }
`

const CloseButton = styled(Button)`
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  min-width: 32px;
  width: 32px;

  svg {
    height: 20px;
    width: 20px;
  }
`

type SearchInputProps = {
  isExpanded?: boolean
  setExpanded: (value: boolean) => void
  onSearch?: (search: string) => void
}
export function SearchInput({ isExpanded, setExpanded, onSearch }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const isMobile = useMediaQuery(`(max-width: calc(${devices.tablet} - 1px))`)

  const [value, setValue] = useState('')

  function click() {
    if (isMobile && !isExpanded) setExpanded(true)
    else if (value.length > 0) onSearch?.(value)
  }

  function reset() {
    setValue('')
    setExpanded(false)
  }

  useEffect(() => {
    if (!isMobile) setExpanded(false)
  }, [isMobile, setExpanded])

  useEffect(() => {
    if (isMobile && isExpanded) inputRef.current?.focus()
  }, [isMobile, isExpanded])

  return (
    <SearchInputContainer $isExpanded={!!isExpanded}>
      {isMobile && isExpanded && (
        <CloseButton onClick={reset}>
          <MdOutlineArrowBack />
        </CloseButton>
      )}

      {(!isMobile || isExpanded) && (
        <input
          ref={inputRef}
          id="header-search-input"
          type="text"
          placeholder="Search"
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
        />
      )}

      {isExpanded && value && (
        <CloseButton onClick={() => setValue('')}>
          <MdOutlineClose />
        </CloseButton>
      )}

      {!isExpanded && <IconButton Icon={MdOutlineSearch} onClick={click} />}
    </SearchInputContainer>
  )
}
