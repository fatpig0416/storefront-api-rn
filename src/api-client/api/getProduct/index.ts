import ApolloClient, { ApolloQueryResult } from 'apollo-client'

import { detailQuery, listQuery } from './query'
import { Context, ProductsQueryType, CustomQuery, ProductFilterInput, ProductSortInput, ProductList, ProductsSearchParams } from './../../../types'

type Variables = {
  pageSize: number
  currentPage: number
  search?: string
  filter?: ProductFilterInput
  sort?: ProductSortInput
}

export default async function (
  context: Context,
  { pageSize = 20, currentPage = 1, filter, queryType = ProductsQueryType.list, search, sort }: ProductsSearchParams,
  customQuery?: CustomQuery
): Promise<ApolloQueryResult<ProductList>> {
  if (customQuery) {
    const { query, variables } = customQuery
    return await (context.client as ApolloClient<any>).query<ProductList>({
      query,
      variables,
      fetchPolicy: 'no-cache',
    })
  } else {
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
}
