import { FC } from 'react'
import * as Styled from './styles'

const avatarURL = 'https://avatars.githubusercontent.com/u/53948974?s=40&v=4'
const userName = '@Alex-Berezov'

const User: FC = () => {
  return (
    <Styled.Root>
      <Styled.Avatar src={avatarURL} alt={userName} />
    </Styled.Root>
  )
}

export default User
