import ApolloClient, { ApolloQueryResult } from 'apollo-client'

import { ProductFilterInput, ProductSortInput, ProductList } from './../../types/GraphQL'
import { detailQuery, listQuery } from './query'
import { ProductsQueryType } from './../../types'

type Variables = {
  pageSize: number
  currentPage: number
  search?: string
  filter?: ProductFilterInput
  sort?: ProductSortInput
  where?: string
}

export default async function (
  context,
  pageSize = 20,
  currentPage = 1,
  filter?: ProductFilterInput,
  queryType: ProductsQueryType = ProductsQueryType.list,
  search?: string,
  sort?: ProductSortInput,
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
