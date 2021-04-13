import gql from 'graphql-tag'
import { productFragment, productChildrenFragment } from './../../fragments'
export const detailQuery = gql`
    query products($search: String, $filter: ProductFilterInput, $pageSize: Int, $currentPage: Int, $sort: ProductSortInput) {
        products(search: $search, filter: $filter, pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
            items {
                ${productFragment}
                configurable_children {
                    ${productChildrenFragment}
                }
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
            attribute_metadata {
                attribute_code
                default_frontend_label
                attribute_type
                options {
                  label
                  value
                }
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
