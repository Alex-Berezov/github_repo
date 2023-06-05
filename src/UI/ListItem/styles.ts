import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface ListItemStylesProps {
  langAvatarColor: string
}

export const Root = styled.div`
  margin-top: 30px;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.colors.liteGrey};
  padding: 16px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
`

export const Title = styled.h3`
  ${(props) => props.theme.typography.H3}
`

export const TitleLink = styled(Link)`
  color: ${(props) => props.theme.colors.linkBlue};
  text-decoration: none;
`

export const Text = styled.div`
  ${(props) => props.theme.typography.text}
  color: ${(props) => props.theme.colors.titleGrey};
  margin: 10px 0;
`

export const TagsList = styled.div`
  display: flex;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  color: ${(props) => props.theme.colors.textGrey};
`

export const Separetor = styled.span`
  margin-left: 8px;
  margin-right: 8px;
  color: ${(props) => props.theme.colors.dotGrey};
`

export const Lang = styled.div`
  display: flex;
`

export const LangAvatar = styled.div<ListItemStylesProps>`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.langAvatarColor};
  border: none;
  border-radius: 100%;
  margin-right: 10px;
`

export const LangText = styled.div``

export const Stars = styled.div`
  display: flex;
  align-items: center;
`

export const StarsCount = styled.div`
  margin-left: 10px;
`

export const Update = styled.div``
