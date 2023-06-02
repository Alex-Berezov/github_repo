import { FC } from 'react'
import * as Styled from './styles'
import { EntityList } from '../../components/EntityList'
import { ListItem } from '../../UI/ListItem'

const Home: FC = () => {
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
