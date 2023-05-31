import { FC } from 'react'
import * as Styled from './styles'

interface TagProps {
  children: React.ReactNode
}

const Tag: FC<TagProps> = ({ children }) => {
  return (
    <Styled.Root>
      <Styled.Link>{children}</Styled.Link>
    </Styled.Root>
  )
}

export default Tag
