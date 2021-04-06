import gql from 'graphql-tag'
import { locationFragment } from './../../fragments'


export const locationsQuery = gql`
  query locations($filter: LocationFilterInput, $pageSize: Int, $currentPage: Int) {
    locations(pageSize: $pageSize, currentPage: $currentPage, filter: $filter) {
      items {
        ${locationFragment}
      }
      total_count
      page_info {
        page_size
        current_page
      }
    }
  }
`