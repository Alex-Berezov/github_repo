import { FC } from 'react'
import * as Styled from './styles'
import { EntityList } from '../../components/EntityList'
import { ListItem } from '../../UI/ListItem'
import { useGetViewerRepositoriesQuery } from '../../generated/graphql'

const Home: FC = () => {
  const { data } = useGetViewerRepositoriesQuery({
    variables: {
      first: 10,
      after: null,
    },
  })

  // const repos = data.viewer.

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
