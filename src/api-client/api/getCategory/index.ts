import ApolloClient, { ApolloQueryResult } from 'apollo-client'
import { CategoryList, CategoryFilterInput, CategorySortInput, ProductFilterInput, ProductSortInput, CategorySearchParams } from './../../types/GraphQL'
import { filteredQuery, listQuery } from './query'
import { Context, CategoriesQueryType, CustomQuery } from './../../types'

type Variables = {
  pageSize: number
  currentPage: number
  search?: string
  filter?: CategoryFilterInput
  sort?: CategorySortInput
  productSearch?: String
  productFilter?: ProductFilterInput
  productPageSize?: number
  productCurrentPage?: number
  productSort?: ProductSortInput
}

export default async function (
  context: Context,
  { pageSize = 250, currentPage = 1, filter, queryType = CategoriesQueryType.list, search, sort, productParams }: CategorySearchParams,
  customQuery?: CustomQuery
): Promise<ApolloQueryResult<CategoryList>> {
  if (customQuery) {
    const { query, variables } = customQuery
    return await (context.client as ApolloClient<any>).query<CategoryList>({
      query,
      variables,
      fetchPolicy: 'no-cache',
    })
  } else {
    const query = queryType === CategoriesQueryType.list ? listQuery : filteredQuery

    let variables: Variables = { pageSize, currentPage }
  
    if (search) variables.search = search
    if (filter) variables.filter = filter
    if (sort) variables.sort = sort
    if (productParams) variables = { ...variables, ...productParams }
  
    return await (context.client as ApolloClient<any>).query<CategoryList>({
      query,
      variables,
      fetchPolicy: 'no-cache',
    })
  }
  
}
