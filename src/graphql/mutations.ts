/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFilms = /* GraphQL */ `
  mutation CreateFilms(
    $input: CreateFilmsInput!
    $condition: ModelFilmsConditionInput
  ) {
    createFilms(input: $input, condition: $condition) {
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
export const updateFilms = /* GraphQL */ `
  mutation UpdateFilms(
    $input: UpdateFilmsInput!
    $condition: ModelFilmsConditionInput
  ) {
    updateFilms(input: $input, condition: $condition) {
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
export const deleteFilms = /* GraphQL */ `
  mutation DeleteFilms(
    $input: DeleteFilmsInput!
    $condition: ModelFilmsConditionInput
  ) {
    deleteFilms(input: $input, condition: $condition) {
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
