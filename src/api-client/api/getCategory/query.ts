import gql from 'graphql-tag'
import { categoryFragment, categoryProductFragment } from './../../fragments'

const categoriesField = `
    id
    parent_id
    description
    name
    is_active
    path
    path_in_store
    url_key
    url_path
    position
    level
    product_count
    children {
        ${categoryFragment}
    }
    children_count
    is_anchor
`

export const filteredQuery = gql`
    query categories($filter: CategoryFilterInput, $productSearch: String, $productFilter: ProductFilterInput, $productPageSize: Int, $productCurrentPage: Int, $productSort: ProductSortInput) {
        categories(filter: $filter) {
            items {
                ${categoriesField}
                products(search: $productSearch, filter: $productFilter, pageSize: $productPageSize, currentPage: $productCurrentPage, sort: $productSort) {
                    ${categoryProductFragment}
                }
            }
        }
    }
`

export const listQuery = gql`
    query categories($search: String, $filter: CategoryFilterInput, $pageSize: Int, $currentPage: Int, $sort: CategorySortInput) {
        categories(search: $search, filter: $filter, pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
            items {
                ${categoriesField}  
            }
            page_info {
                page_size
                current_page
            }
            aggregations
        }
    }
`
