export const productChildrenFragment = `
  id
  type_id
  name
  sku
  description
  short_description
  price
  price_incl_tax
  price_tax
  final_price
  final_price_incl_tax
  final_price_tax
  original_price
  original_price_incl_tax
  original_price_tax
  min_price
  max_price
  special_price
  special_price_incl_tax
  special_price_tax
  special_from_date
  special_to_date
  weight
  image
  small_image
  thumbnail
  size
  size_options
  color
  color_options
  is_in_stock
  media_gallery {
    image
    url
  }
  miuz_id
  miuz_store_id
  miuz_sku
  miuz_weight
  metal
  metal_color
  carat_weight
  collection_type
  stone_weight
  stone_type
  stone_name_mapped
  stone_name
  main_stone
  article
  configurable_options {
    id
    attribute_id
    attribute_code
    label
    values {
      value_index
      label
    }
  }
`

export const productFragment = `
  id
  type_id
  name
  sku
  description
  short_description
  price
  price_incl_tax
  price_tax
  final_price
  final_price_incl_tax
  final_price_tax
  original_price
  original_price_incl_tax
  original_price_tax
  min_price
  max_price
  special_price
  special_price_incl_tax
  special_price_tax
  weight
  image
  small_image
  thumbnail
  size
  size_options
  color
  color_options
  category_ids
  is_in_stock
  keyword
  media_gallery {
    image
    type
    url
    label
    video
  }
  miuz_id
  miuz_store_id
  miuz_sku
  miuz_weight
  metal
  metal_color
  carat_weight
  collection_type
  stone_weight
  stone_type
  stone_name
  main_stone
  article
  configurable_options {
    id
    attribute_id
    attribute_code
    label
    position
    values {
      value_index
      label
    }
    product_id
  }
`

export const categoryProductFragment = `
  items {
    ${productFragment}
  }
  page_info {
    page_size
    current_page
  }
  total_count {
    value
    relation
  }
`

const categoryChildren = `
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
  children_count
  available_sort_by
  include_in_menu
  is_anchor
`

export const categoryFragment = `
  ${categoryChildren}
  children {
    ${categoryChildren}
  }
`

export const locationFragment = `
  id
  name
  city_name_converted
  active
  city
  zip
  address
  country
  position
  miuz_id
  lat
  long
  working_hours
  services
  products {
    ${productFragment}
  }
`