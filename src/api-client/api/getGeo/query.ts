import gql from 'graphql-tag'

export const geoQuery = gql`
  query geo($ip: String) {
    geo(ip: $ip) {
      inetnum
      country
      city
      region
      district
      lat
      lng
    }
  }
`