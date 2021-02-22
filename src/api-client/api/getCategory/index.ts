import ApolloClient, { ApolloQueryResult } from 'apollo-client'
import { CategoryList, CategoryFilterInput, CategorySortInput } from './../../types/GraphQL'
import { query } from './query'

type Variables = {
  pageSize: number
  currentPage: number
  search?: string
  filter?: CategoryFilterInput
  sort?: CategorySortInput
}

export default async function (
  context,
  pageSize = 100,
  currentPage = 1,
  filter?: CategoryFilterInput,
  search?: string,
  sort?: CategorySortInput,
): Promise<ApolloQueryResult<CategoryList>> {
  const variables: Variables = { pageSize, currentPage }

  if (search) variables.search = search
  if (filter) variables.filter = filter
  if (sort) variables.sort = sort

  return await (context.client as ApolloClient<any>).query<CategoryList>({
    query,
    variables,
    fetchPolicy: 'no-cache',
  })
}
