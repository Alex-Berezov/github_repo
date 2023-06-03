import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'
import * as Styled from './styles'

interface DearchProps {
  setSearchValue: (value: string) => void
}

const Search: FC<DearchProps> = ({ setSearchValue }) => {
  const [value, setValue] = useState('')
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchValue(e.currentTarget.value)
    }
  }

  return (
    <Styled.Root>
      <Styled.StyledSearchIcon />
      <Styled.SearchInput
        type='text'
        placeholder='Search'
        value={value}
        onChange={handleSearch}
        onKeyDown={handleKeyPress}
      />
    </Styled.Root>
  )
}

export default Search
