import { FC } from 'react'
import * as Styled from './styles'
import { Logo } from './components/Logo'
import { Search } from './components/Search'
import { User } from './components/User'
import { useGetSerchedRepositoriesQuery } from '../../generated/graphql'

const Header: FC = () => {
  const { data } = useGetSerchedRepositoriesQuery({
    variables: {
      name: 'react',
      first: 10,
      after: null,
    },
  })

  console.log('====================================')
  console.log('searched data >>', data)
  console.log('====================================')

  return (
    <Styled.Root>
      <Logo />
      <Search />
      <User />
    </Styled.Root>
  )
}

export default Header
