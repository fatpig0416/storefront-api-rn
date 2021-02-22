import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import fetch from 'isomorphic-fetch'
import { onError } from 'apollo-link-error'

import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import introspectionQueryResultData from './../fragments/fragmentTypes'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})
const cache = new InMemoryCache({ fragmentMatcher })

const createErrorHandler = () => {
  return onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        if (!message.includes('Resource Owner Password Credentials Grant')) {
          if (!locations) {
            console.error(`[GraphQL error]: Message: ${message}, Path: ${path}`)
            return
          }

          const parsedLocations = locations.map(({ column, line }) => `[column: ${column}, line: ${line}]`)

          console.error(`[GraphQL error]: Message: ${message}, Location: ${parsedLocations.join(', ')}, Path: ${path}`)
        }
      })
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`)
    }
  })
}

type Settings = {
  api: string
}

export default (config: Settings) => {
  const publicApiLink = createHttpLink({
    uri: config.api,
    fetch,
    headers: {},
  })

  const onErrorLink = createErrorHandler()

  const link: ApolloLink = ApolloLink.from([onErrorLink, publicApiLink])

  const apolloClient = new ApolloClient({
    cache,
    link,
  })

  return {
    client: apolloClient,
    config,
  }
}
