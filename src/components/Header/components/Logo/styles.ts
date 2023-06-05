import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Root = styled.div``

export const LogoLink = styled(Link)`
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
