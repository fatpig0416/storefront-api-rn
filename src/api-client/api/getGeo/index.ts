import ApolloClient, { ApolloQueryResult } from 'apollo-client'
import { geoQuery } from './query'
import { Context, Geo } from './../../../types'

type Variables = {
  ip: string
}

export default async function (
  context: Context,
  ip: string,
): Promise<ApolloQueryResult<Geo>> {
  let variables: Variables = { ip }

  return await (context.client as ApolloClient<any>).query<Geo>({
    query: geoQuery,
    variables,
    fetchPolicy: 'no-cache',
  })
}
