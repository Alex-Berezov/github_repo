import { gql } from '@apollo/client'

export const GET_WIEWER_REPOSITORIES = gql`
  query GetViewerRepositories($first: Int!, $after: String) {
    viewer {
      repositories(
        first: $first
        after: $after
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        edges {
          node {
            name
            stargazerCount
            updatedAt
            url
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`
