import { FC } from 'react'
import * as Styled from './styles'
import { Tag } from '../Tag'

import { RepositoryEdge } from '../../generated/graphql'
import { formatUpdatedAt } from '../../utils/formatUpdatedAt'

const avatarURL = 'https://avatars.githubusercontent.com/u/53948974?s=40&v=4'

interface ListItemProps {
  repoData: RepositoryEdge
}

const ListItem: FC<ListItemProps> = ({ repoData }) => {
  const repo = repoData?.node
  // console.log('====================================')
  // console.log('repo >>', repo)
  // console.log('====================================')
  return (
    <Styled.Root>
      <Styled.Header>
        <Styled.Title>
          <Styled.TitleLink href='#'>{repo?.name}</Styled.TitleLink>
        </Styled.Title>
      </Styled.Header>

      <Styled.Text>{repo?.description}</Styled.Text>

      <Styled.TagsList>
        {repo?.languages?.edges?.map((el) => {
          return <Tag key={el?.node?.name}>{el?.node?.name}</Tag>
        })}
      </Styled.TagsList>

      <Styled.Footer>
        <Styled.Lang>
          <Styled.LangAvatar
            langAvatarColor={repo?.languages?.edges?.[0]?.node?.color ?? ''}
          />
          <Styled.LangText>
            {repo?.languages?.edges?.[0]?.node?.name}
          </Styled.LangText>
        </Styled.Lang>
        <Styled.Separetor>·</Styled.Separetor>
        <Styled.Stars>
          <svg
            aria-hidden='true'
            focusable='false'
            role='img'
            viewBox='0 0 16 16'
            width='16'
            height='16'
            fill='currentColor'
          >
            <path d='M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z'></path>
          </svg>
          <Styled.StarsCount>{repo?.stargazerCount}</Styled.StarsCount>
        </Styled.Stars>
        <Styled.Separetor>·</Styled.Separetor>
        <Styled.Update>{formatUpdatedAt(repo?.updatedAt)}</Styled.Update>
      </Styled.Footer>
    </Styled.Root>
  )
}

export default ListItem
