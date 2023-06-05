import styled from 'styled-components'

interface PaginationStylesProps {
  disabled?: boolean
  active?: boolean
}

export const Root = styled.div`
  margin: 50px 0 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NextPrevButton = styled.button<PaginationStylesProps>`
  color: ${(props) =>
    props.disabled ? props.theme.colors.dotGrey : props.theme.colors.linkBlue};
  background-color: transparent;
  border: none;
  padding: 7px;
  border-radius: 6px;
  margin: 0 10px;
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1) 0s;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? 'transparent' : props.theme.colors.hoveredGrey};
  }
`

export const Button = styled.button<PaginationStylesProps>`
  background-color: ${(props) =>
    props.active ? props.theme.colors.brightBlue : 'transparent'};
  border: none;
  padding: 7px 12px;
  border-radius: 6px;
  color: ${(props) =>
    props.active ? props.theme.colors.mainWhite : props.theme.colors.titleGrey};
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1) 0s;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? 'transparent' : props.theme.colors.hoveredGrey};
  }
`

export const Dots = styled.span`
  color: ${(props) => props.theme.colors.dotGrey};
  cursor: default;
  background-color: transparent;
  padding: 7px 12px;
`
