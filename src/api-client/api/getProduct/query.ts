import gql from 'graphql-tag'
import { productFragment } from './../../fragments'
export const detailQuery = gql`
    query products($search: String, $filter: ProductFilterInput, $pageSize: Int, $currentPage: Int, $sort: ProductSortInput) {
        products(search: $search, filter: $filter, pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
            items {
                ${productFragment}
            }
        }
    }
`

export const listQuery = gql`
    query products($search: String, $filter: ProductFilterInput, $pageSize: Int, $currentPage: Int, $sort: ProductSortInput) {
        products(search: $search, filter: $filter, pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
            items {
                ${productFragment}
            }
            aggregations
            page_info {
                page_size
                current_page
            }
            sort_fields {
                default
                options {
                    label
                    value
                }
            }
            total_count {
                value
                relation
            }
        }
    }
`
