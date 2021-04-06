export const productFragment = `
  id
  type_id
  visibility
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
  manufacturer
  meta_title
  meta_keyword
  meta_description
  image
  small_image
  thumbnail
  tier_price
  tier_prices {
      customer_group_id
      qty
      value
      percentage_value
      website_id
  }
  news_from_date
  size
  size_options
  color
  color_options
  category_ids
  categories {
      id
      name
      url_path
  }
  category {
      category_id
      name
  }
  stock {
    item_id
    product_id
    stock_id
    qty
    is_in_stock
    is_qty_decimal
    min_qty
    max_sale_qty
    backorders
    qty_increments
  }
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
  configurable_children {
    id
    sku
    name
    type_id
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
    manufacturer
    color
    color_options
    image
    small_image
    thumbnail
    size
    size_options
    carat_weight
    miuz_weight
    miuz_store_id
    miuz_id
    metal
    metal_color
    collection_type
    stone_weight
    stone_type
    stone_name_mapped
    stone_name
    main_stone
    article
    
  }
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
  custom_options {
    image_size_x
    image_size_y
    title
    type
    is_require
    max_characters
    values {
      price
      price_type
      option_type_id
      title
      sort_order
    }
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

export const categoryFragment = `
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
  products {
    ${productFragment}
  }
`