/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFilmsInput = {
  id?: string | null,
  title: string,
  description: string,
  realisator: string,
  year: string,
};

export type ModelFilmsConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  realisator?: ModelStringInput | null,
  year?: ModelStringInput | null,
  and?: Array< ModelFilmsConditionInput | null > | null,
  or?: Array< ModelFilmsConditionInput | null > | null,
  not?: ModelFilmsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type films = {
  __typename: "films",
  id: string,
  title: string,
  description: string,
  realisator: string,
  year: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFilmsInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  realisator?: string | null,
  year?: string | null,
};

export type DeleteFilmsInput = {
  id: string,
};

export type ModelFilmsFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  realisator?: ModelStringInput | null,
  year?: ModelStringInput | null,
  and?: Array< ModelFilmsFilterInput | null > | null,
  or?: Array< ModelFilmsFilterInput | null > | null,
  not?: ModelFilmsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFilmsConnection = {
  __typename: "ModelFilmsConnection",
  items:  Array<films | null >,
  nextToken?: string | null,
};

export type CreateFilmsMutationVariables = {
  input: CreateFilmsInput,
  condition?: ModelFilmsConditionInput | null,
};

export type CreateFilmsMutation = {
  createFilms?:  {
    __typename: "films",
    id: string,
    title: string,
    description: string,
    realisator: string,
    year: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFilmsMutationVariables = {
  input: UpdateFilmsInput,
  condition?: ModelFilmsConditionInput | null,
};

export type UpdateFilmsMutation = {
  updateFilms?:  {
    __typename: "films",
    id: string,
    title: string,
    description: string,
    realisator: string,
    year: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFilmsMutationVariables = {
  input: DeleteFilmsInput,
  condition?: ModelFilmsConditionInput | null,
};

export type DeleteFilmsMutation = {
  deleteFilms?:  {
    __typename: "films",
    id: string,
    title: string,
    description: string,
    realisator: string,
    year: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFilmsQueryVariables = {
  id: string,
};

export type GetFilmsQuery = {
  getFilms?:  {
    __typename: "films",
    id: string,
    title: string,
    description: string,
    realisator: string,
    year: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFilmsQueryVariables = {
  filter?: ModelFilmsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFilmsQuery = {
  listFilms?:  {
    __typename: "ModelFilmsConnection",
    items:  Array< {
      __typename: "films",
      id: string,
      title: string,
      description: string,
      realisator: string,
      year: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFilmsSubscription = {
  onCreateFilms?:  {
    __typename: "films",
    id: string,
    title: string,
    description: string,
    realisator: string,
    year: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFilmsSubscription = {
  onUpdateFilms?:  {
    __typename: "films",
    id: string,
    title: string,
    description: string,
    realisator: string,
    year: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFilmsSubscription = {
  onDeleteFilms?:  {
    __typename: "films",
    id: string,
    title: string,
    description: string,
    realisator: string,
    year: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
