import gql from 'graphql-tag'

import { locationFragment } from './../../fragments'

export const distanceQuery = gql`
  query distance($city: String) {
    distance(city: $city) {
      from
      to
      distance
      locations {
        ${locationFragment}
      }
    }
  }
`