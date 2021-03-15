import gql from 'graphql-tag'

import { productFragment } from './../../fragments'

export const locationsQuery = gql`
  query locations($filter: LocationFilterInput, $pageSize: Int, $currentPage: Int) {
    locations(pageSize: $pageSize, currentPage: $currentPage, filter: $filter) {
      items {
        id
        name
        name_converted
        status
        city
        zip
        address
        country
        position
        miuz_id
        products {
          ${productFragment}
        }
      }
      total_count
      page_info {
        page_size
        current_page
      }
    }
  }
`