/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFilms = /* GraphQL */ `
  query GetFilms($id: ID!) {
    getFilms(id: $id) {
      id
      title
      description
      realisator
      year
      createdAt
      updatedAt
    }
  }
`;
export const listFilms = /* GraphQL */ `
  query ListFilms(
    $filter: ModelFilmsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFilms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        realisator
        year
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
