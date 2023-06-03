import { FC, useEffect, useState } from 'react'
import * as Styled from './styles'
import { Logo } from './components/Logo'
import { Search } from './components/Search'
import { User } from './components/User'
import { useGetSerchedRepositoriesQuery } from '../../generated/graphql'

const Header: FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const { data, refetch } = useGetSerchedRepositoriesQuery({
    variables: {
      name: 'react',
      first: 10,
      after: null,
    },
  })

  useEffect(() => {
    refetch({ name: searchValue })
  }, [refetch, searchValue])

  // console.log('====================================')
  // console.log('searchValue data >>', data)
  // console.log('====================================')

  return (
    <Styled.Root>
      <Logo />
      <Search setSearchValue={setSearchValue} />
      <User />
    </Styled.Root>
  )
}

export default Header
