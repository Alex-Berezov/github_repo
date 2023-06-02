import { FC } from 'react'
import * as Styled from './styles'
import { EntityList } from '../../components/EntityList'
import { ListItem } from '../../UI/ListItem'
import { useQuery } from '@apollo/client'
import {
  GET_REPOSITORIES,
  GET_WIEWER_REPOSITORIES,
} from './queries/GetAllRepos'

const Home: FC = () => {
  const { data: searchedData } = useQuery(GET_REPOSITORIES, {
    variables: {
      name: '',
      after: null,
    },
  })

  const { data: currentUserData } = useQuery(GET_WIEWER_REPOSITORIES, {
    variables: {
      first: 10,
      after: null,
    },
  })

  console.log('====================================')
  console.log('searchedData >>', searchedData)
  console.log('====================================')

  console.log('====================================')
  console.log('currentUserData >>', currentUserData)
  console.log('====================================')

  return (
    <Styled.Root>
      <EntityList>
        <ListItem />
        <ListItem />
        <ListItem />
      </EntityList>
    </Styled.Root>
  )
}

export default Home
