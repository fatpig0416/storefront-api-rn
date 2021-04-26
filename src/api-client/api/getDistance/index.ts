import ApolloClient, { ApolloQueryResult } from 'apollo-client'
import { distanceQuery } from './query'
import { Context, Distance } from './../../../types'

type Variables = {
  city: string
}

export default async function (
  context: Context,
  city: string,
): Promise<ApolloQueryResult<Distance>> {
  let variables: Variables = { city }

  return await (context.client as ApolloClient<any>).query<Distance>({
    query: distanceQuery,
    variables,
    fetchPolicy: 'no-cache',
  })
}
