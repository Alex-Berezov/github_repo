import { FC } from 'react'
import * as Styled from './styles'
import { EntityList } from '../../components/EntityList'
import { ListItem } from '../../UI/ListItem'
import {
  RepositoryEdge,
  useGetViewerRepositoriesQuery,
} from '../../generated/graphql'

const Home: FC = () => {
  const { data } = useGetViewerRepositoriesQuery({
    variables: {
      first: 40,
      after: null,
    },
  })

  const repos: RepositoryEdge[] | undefined = data?.viewer?.repositories?.edges

  return (
    <Styled.Root>
      <EntityList>
        {repos?.map((el) => {
          return <ListItem key={el.node?.name} repoData={el} />
        })}
      </EntityList>
    </Styled.Root>
  )
}

export default Home
