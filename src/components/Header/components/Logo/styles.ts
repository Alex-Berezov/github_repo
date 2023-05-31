import styled from 'styled-components'

export const Root = styled.div``

export const Link = styled.a`
  cursor: pointer;

  svg {
    fill: ${(props) => props.theme.colors.mainWhite};
  }

  &:hover {
    svg {
      fill: ${(props) => props.theme.colors.textGrey};
    }
  }
`
