import { FC } from 'react'
import * as Styled from './styles'

const Search: FC = () => {
  return (
    <Styled.Root>
      <Styled.StyledSearchIcon />
      <Styled.SearchInput type='text' placeholder='Search' />
    </Styled.Root>
  )
}

export default Search
