import ApolloClient, { ApolloQueryResult } from 'apollo-client'

import { LocationList, LocationFilterInput, LocationsSearchParams } from './../../types/GraphQL'
import { locationsQuery } from './query'
import { Context } from './../../types'

type Variables = {
  pageSize: number
  currentPage: number
  filter?: LocationFilterInput
}

export default async function (
  context: Context,
  { pageSize = 100, currentPage = 1, filter }: LocationsSearchParams
): Promise<ApolloQueryResult<LocationList>> {

    const variables: Variables = { pageSize, currentPage }
    if (filter) variables.filter = filter

    return await (context.client as ApolloClient<any>).query<LocationList>({
      query: locationsQuery,
      variables,
      fetchPolicy: 'no-cache',
    })
}
