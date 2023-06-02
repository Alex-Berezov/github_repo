import styled from 'styled-components'

export const Root = styled.div`
  padding: 5px 15px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.darkBlue};
  color: ${(props) => props.theme.colors.linkBlue};
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.brightBlue};
    color: ${(props) => props.theme.colors.mainWhite};
  }
`

export const Link = styled.a`
  display: flex;
  color: inherit;
  ${(props) => props.theme.typography.textXS}
`
