import { FC, useState, useEffect } from 'react'
import * as Styled from './styles'
import { EntityList } from '../../components/EntityList'
import { ListItem } from '../../UI/ListItem'
import {
  RepositoryEdge,
  useGetViewerRepositoriesQuery,
} from '../../generated/graphql'
import { Pagination } from '../../components/Pagination'

const Home: FC = () => {
  const itemsPerPage = 3
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCursors, setPageCursors] = useState<string[]>([])

  const { data, fetchMore } = useGetViewerRepositoriesQuery({
    variables: {
      first: itemsPerPage,
      after: null,
    },
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  })

  const totalPages = Math.ceil(
    data?.viewer?.repositories?.totalCount / itemsPerPage
  )

  useEffect(() => {
    if (data?.viewer?.repositories?.edges) {
      const lastCursor =
        data.viewer.repositories.edges[
          data.viewer.repositories.edges.length - 1
        ]?.cursor

      if (!pageCursors.includes(lastCursor)) {
        setPageCursors((prev) => [...prev, lastCursor])
      }
    }
  }, [data, pageCursors])

  const onPageChange = (page: number) => {
    setCurrentPage(page)

    fetchMore({
      variables: {
        first: itemsPerPage,
        after: pageCursors[page - 2],
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult
        return fetchMoreResult
      },
    })
  }

  const repos: RepositoryEdge[] | undefined = data?.viewer?.repositories?.edges

  return (
    <Styled.Root>
      <EntityList>
        {repos?.map((el) => {
          return <ListItem key={el.node?.name} repoData={el} />
        })}
      </EntityList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Styled.Root>
  )
}

export default Home
