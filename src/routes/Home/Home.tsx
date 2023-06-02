import { FC } from 'react'
import * as Styled from './styles'
import { EntityList } from '../../components/EntityList'
import { ListItem } from '../../UI/ListItem'
import { useQuery } from '@apollo/client'
import { GET_WIEWER_REPOSITORIES } from './queries/GetWiewerRepos'

const Home: FC = () => {
  const { data } = useQuery(GET_WIEWER_REPOSITORIES, {
    variables: {
      first: 10,
      after: null,
    },
  })

  console.log('====================================')
  console.log('default data >>', data)
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
