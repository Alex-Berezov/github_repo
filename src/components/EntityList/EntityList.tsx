import { FC } from 'react'
import * as Styled from './styles'

interface EntityListProps {
  children: React.ReactNode
}

const EntityList: FC<EntityListProps> = ({ children }) => {
  return <Styled.Root>{children}</Styled.Root>
}

export default EntityList
