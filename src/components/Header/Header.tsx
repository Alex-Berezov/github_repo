import { FC } from 'react'
import * as Styled from './styles'
import { Logo } from './components/Logo'
import { Search } from './components/Search'
import { User } from './components/User'
import { useQuery } from '@apollo/client'
import { GET_SERCHED_REPOSITORIES } from './queries/GetSerchedRepos'

const Header: FC = () => {
  const { data } = useQuery(GET_SERCHED_REPOSITORIES, {
    variables: {
      name: 'react',
      first: 10,
      after: null,
    },
  })

  // console.log('====================================')
  // console.log('searched data >>', data)
  // console.log('====================================')

  return (
    <Styled.Root>
      <Logo />
      <Search />
      <User />
    </Styled.Root>
  )
}

export default Header
