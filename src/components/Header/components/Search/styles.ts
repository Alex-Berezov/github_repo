import styled from 'styled-components'
import SearchIcon from '../../../../UI/SearchIcon/SearchIcon'

export const Root = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  background: transparent;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.mainBlack};
  }
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  flex-grow: 1;
  cursor: pointer;
  background: transparent;
  color: ${(props) => props.theme.colors.mainWhite};

  ::placeholder {
    color: ${(props) => props.theme.colors.mainWhite};
  }
`

export const StyledSearchIcon = styled(SearchIcon)`
  margin-right: 5px;
`
