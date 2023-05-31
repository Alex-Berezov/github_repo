import { FC } from 'react'
import * as Styled from './styles'
import { Logo } from './components/Logo'
import { Search } from './components/Search'
import { User } from './components/User'

const Header: FC = () => {
  return (
    <Styled.Root>
      <Logo />
      <Search />
      <User />
    </Styled.Root>
  )
}

export default Header
