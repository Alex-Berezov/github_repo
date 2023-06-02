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

export const GET_REPOSITORIES = gql`
  query GetRepositories($name: String!, $first: Int!, $after: String) {
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
