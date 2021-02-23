import gql from 'graphql-tag'
// categoryProductFragment
import { categoryFragment } from './../../fragments'

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
    created_at
    updated_at
    product_count
    default_sort_by
    children {
        ${categoryFragment}
    }
    children_count
    available_sort_by
    include_in_menu
    display_mode
    is_anchor
    page_layout
    breadcrumbs {
        category_id
        name
        slug
        path
    }
`

export const filteredQuery = gql`
    query categories($filter: CategoryFilterInput) {
        categories(filter: $filter) {
            ${categoriesField}  
        }
    }
`

export const query = gql`
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
