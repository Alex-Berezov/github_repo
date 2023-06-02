import { gql } from '@apollo/client'

export const GET_SERCHED_REPOSITORIES = gql`
  query GetSerchedRepositories($name: String!, $first: Int!, $after: String) {
    search(query: $name, type: REPOSITORY, first: $first, after: $after) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            stargazerCount
            updatedAt
            url
            owner {
              login
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`
