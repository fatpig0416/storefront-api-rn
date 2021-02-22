export const productFragment = `
  id
  type_id
  visibility
  status
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
  required_options
  has_options
  image_label
  small_image_label
  thumbnail_label
  country_of_manufacture
  gift_message_available
  created_at
  updated_at
  size
  size_options
  color
  color_options
  category_ids
  categories {
      id
      name
      url_path
      breadcrumbs {
          category_id
          name
      }
  }
  breadcrumbs {
      category_id
      name
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
  reviews {
    page_info {
      page_size
      current_page
    }
    items {
      id
      title
      detail
      nickname
      review_entity
      review_type
      review_status
      created_at
    }
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

export const cartFragment = `
  id
  prices {
      subtotal_excluding_tax {
        value
      },
      subtotal_including_tax {
        value
      },
      applied_taxes {
        amount {
          value
        },
        label
      }
      discounts {
        amount {
          value
        },
        label
      }
      grand_total {
        value
      }
  }
  shipping_addresses {
    selected_shipping_method {
      amount {
        currency
        value
      },
      carrier_code
      method_code,
      carrier_title
      method_title
    }
  }
  items {
    id
    product {
        ${productFragment}
    }
    prices {
      row_total {
        value
      }
      row_total_including_tax {
        value
      }
      total_item_discount {
        value
      }
    }
    ... on ConfigurableCartItem {
      configurable_options {
         id
         value_id,
         option_label
         value_label
      }
    }
    quantity
  }
  total_quantity
`

export const customerFragment = `
  email
  firstname
  is_subscribed
  lastname
  middlename
  prefix
  suffix
  taxvat
  default_billing
  default_shipping
`