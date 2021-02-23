import ApolloClient, { ApolloQueryResult } from 'apollo-client'

import { ProductFilterInput, ProductSortInput, ProductList, ProductsSearchParams } from './../../types/GraphQL'
import { detailQuery, listQuery } from './query'
import { Context, ProductsQueryType } from './../../types'

type Variables = {
  pageSize: number
  currentPage: number
  search?: string
  filter?: ProductFilterInput
  sort?: ProductSortInput
}

const defaultParams = {
  pageSize: 20,
  currentPage: 1,
  queryType: ProductsQueryType.list
}

export default async function (
  context: Context,
  { pageSize, currentPage, filter, queryType, search, sort }: ProductsSearchParams = defaultParams,
): Promise<ApolloQueryResult<ProductList>> {
  const query = queryType === ProductsQueryType.list ? listQuery : detailQuery

  const variables: Variables = { pageSize, currentPage }
  if (search) variables.search = search
  if (filter) variables.filter = filter
  if (sort) variables.sort = sort

  return await (context.client as ApolloClient<any>).query<ProductList>({
    query,
    variables,
    fetchPolicy: 'no-cache',
  })
}
