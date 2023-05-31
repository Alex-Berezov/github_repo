import styled from 'styled-components'

export const Root = styled.div`
  padding: 3px;
  background-color: ${(props) => props.theme.colors.darkBlue};
`

export const Link = styled.a`
  color: ${(props) => props.theme.colors.linkBlue};
`
