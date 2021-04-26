export type CategoryList = {
  items: [CategoryTree]
  page_info: SearchResultPageInfo
  hits: JSON
  suggest: JSON
  aggregations: JSON
}

export type ProductList = {
  items: [ProductInterface]
  aggregations?: JSON
  page_info?: SearchResultPageInfo
  sort_fields?: SortFields
  total_count?: TotalCountInterface
}

export type LocationList = {
  items: [LocationInterface]
  page_info?: SearchResultPageInfo
  total_count?: TotalCountInterface
}

export type CategoryFilterInput = {
  id: FilterTypeInput
  parent_id: FilterTypeInput
  is_active: FilterTypeInput
  url_key: FilterTypeInput
  url_path: FilterTypeInput
  position: FilterTypeInput
  level: FilterTypeInput
  created_at: FilterTypeInput
  updated_at: FilterTypeInput
  product_count: FilterTypeInput
  children_data: CategoryFilterInput
  children_count: FilterTypeInput
  include_in_menu: FilterTypeInput
}

export type CategorySortInput = {
  id: SortEnum
  parent_id: SortEnum
  is_active: SortEnum
  url_key: SortEnum
  url_path: SortEnum
  position: SortEnum
  level: SortEnum
  created_at: SortEnum
  updated_at: SortEnum
  product_count: SortEnum
  include_in_menu: SortEnum
}

type FilterTypeInput = {
  eq: JSON
  finset: [string]
  from: string
  gt: string
  gte: string
  gteq: string
  in: [JSON]
  like: string
  lt: string
  lte: string
  lteq: string
  moreq: string
  neq: JSON
  notnull: string
  null: string
  to: string
  nin: [string]
  scope: [string]
}

export interface CategoryTree extends CategoryInterface {
  children: [CategoryTree]
  children_data: [CategoryTree]
}

export type CategoryInterface = {
  id: string
  parent_id: number
  description: string
  name: string
  is_active: boolean
  path: string
  path_in_store: string
  url_key: string
  url_path: string
  position: number
  level: number
  created_at: any
  updated_at: any
  product_count: number
  default_sort_by: string
  children_count: number
  available_sort_by: [string]
  include_in_menu: boolean
  display_mode: string
  is_anchor: boolean
  page_layout: string
  breadcrumbs: [Breadcrumb]
  // products: CategoryProducts
}

export type CategoryProducts = {
  items: [ProductInterface]
  page_info: SearchResultPageInfo
  total_count: TotalCountInterface
}

export type TierPrice = {
  customer_group_id: string
  qty: number
  value: number
  percentage_value: number
  website_id: number
}

export type StockItem = {
  item_id: number
  product_id: number
  stock_id: number
  qty: number
  is_in_stock: boolean
  is_qty_decimal: boolean
  min_qty: number
  max_sale_qty: number
  backorders: number
  qty_increments: number
}

export type MediaGalleryInterface = {
  image: string
  type: string
  url: string
  label: string
  video?: JSON
}

export type ConfigurableOptionValue = {
  value_index: number
  label: string
}

export type ConfigurableOption = {
  id: string
  attribute_id: number
  attribute_code: string
  label: string
  position: number
  values: [ConfigurableOptionValue]
  product_id: number
}

export type CustomOptionValue = {
  price: number
  price_type: string
  option_type_id: number
  title: string
  sort_order: number
}

export type CustomOption = {
  image_size_x: number
  image_size_y: number
  max_characters: number
  values: [CustomOptionValue]
  option_id: number
  is_require: boolean
  title: string
  type: string
}

export type BundleOptionLink = {
  price: number
  qty: number
  can_change_quantity: boolean
  option_id: number
  id: string
  sku: string
  product: ProductInterface
  position: number
}

export type BundleOption = {
  option_id: number
  position: number
  title: string
  type: string
  sku: string
  required: boolean
  product_links: [BundleOptionLink]
}

export type Review = {
  id: string
  title: string
  detail: string
  nickname: string
  review_entity: string
  review_type: number
  review_status: number
  created_at: any
}

export type ProductReview = {
  page_info: SearchResultPageInfo
  items: [Review]
}

export type ProductInterface = {
  id: string
  type_id: string
  visibility: number
  status: number
  name: string
  sku: string
  description: string
  short_description: string
  price: number
  price_incl_tax: number
  price_tax: number
  final_price: number
  final_price_incl_tax: number
  final_price_tax: number
  original_price: number
  original_price_incl_tax: number
  original_price_tax: number
  min_price: number
  max_price: number
  special_price: number
  special_price_incl_tax: number
  special_price_tax: number
  special_from_date: string
  special_to_date: string
  weight: number
  manufacturer: string
  meta_title: string
  meta_keyword: string
  meta_description: string
  image: string
  small_image: string
  thumbnail: string
  tier_price: number
  tier_prices: [TierPrice]
  news_from_date: string
  required_options: boolean
  has_options: boolean
  image_label: string
  small_image_label: string
  thumbnail_label: string
  country_of_manufacture: string
  gift_message_available: boolean
  created_at: string
  updated_at: string
  size: string
  size_options: [string]
  color: string
  color_options: [string]
  category_ids: [string]
  categories: [CategoryTree]
  breadcrumbs: [Breadcrumb]
  category: [CategoryBinding]
  configurable_children: [ProductInterface]
  stock: [StockItem]
  is_in_stock: boolean
  keyword: string
  media_gallery: [MediaGalleryInterface]
  miuz_store_id: string
  metal: number
  metal_color: number
  carat_weight: [string]
  stone_weight: [string]
  stone_type: [string]
  stone_name_mapped: [string]
  stone_name: [string]
  main_stone: number
  article: string
  collection_type: [string]
  configurable_options: [ConfigurableOption]
  custom_options: [CustomOption]
  bundle_options: [BundleOption]
  reviews: ProductReview
}

export type ProductLinksInterface = {
  link_type: string
  linked_product_sku: string
  linked_product_type: string
  position: number
  sku: string
}

export type ProductLinks = ProductLinksInterface

export enum ProductStockStatus {
  IN_STOCK = 'IN_STOCK',
  OUT_OF_STOCK = 'OUT_OF_STOCK',
}

export type ProductImage = MediaGalleryInterface

export type Breadcrumb = {
  category_id: number
  name: string
  slug: number
  path: number
}

export type CategoryBinding = {
  category_id: number
  name: string
  slug: number
  path: number
}

export type CmsBlock = {
  content: string
  identifier: string
  title: string
}

export type SearchResultPageInfo = {
  current_page: number
  page_size: number
}

export type TotalCountInterface = {
  value: number
  relation: string
}

export type Aggregation = {
  attribute_code: string
  count: number
  label: string
  options: [AggregationOption]
}

export type AggregationOption = {
  count: number
  label: string
  value: string
}

export type SortFields = {
  default: string
  options?: [SortField]
}

export type SortField = {
  label: string
  value: string
}

export type LocationInterface = {
  id: string
  name: string
  city_name_converted: string
  status: string
  city: string
  zip: string
  address: string
  country: string
  position: number
  miuz_id: string
  lat: string
  long: string
  working_hours: string
  services: [string]
  products: [ProductInterface]
}

type CategoryBindingFilterInput = {
  category_id: FilterTypeInput
  name: FilterTypeInput
}

type StockFilterInput = {
  is_in_stock: FilterTypeInput
  qty: FilterTypeInput
}

export type ProductFilterInput = {
  id: FilterTypeInput
  name: FilterTypeInput
  sku: FilterTypeInput
  description: FilterTypeInput
  short_description: FilterTypeInput
  price: FilterTypeInput
  special_price: FilterTypeInput
  weight: FilterTypeInput
  category: CategoryBindingFilterInput
  manufacturer: FilterTypeInput
  meta_title: FilterTypeInput
  meta_keyword: FilterTypeInput
  meta_description: FilterTypeInput
  image: FilterTypeInput
  small_image: FilterTypeInput
  thumbnail: FilterTypeInput
  tier_price: FilterTypeInput
  news_from_date: FilterTypeInput
  news_to_date: FilterTypeInput
  custom_layout_update: FilterTypeInput
  min_price: FilterTypeInput
  max_price: FilterTypeInput
  category_ids: FilterTypeInput
  options_container: FilterTypeInput
  required_options: FilterTypeInput
  has_options: FilterTypeInput
  image_label: FilterTypeInput
  small_image_label: FilterTypeInput
  thumbnail_label: FilterTypeInput
  created_at: FilterTypeInput
  updated_at: FilterTypeInput
  country_of_manufacture: FilterTypeInput
  custom_layout: FilterTypeInput
  gift_message_available: FilterTypeInput
  visibility: FilterTypeInput
  type_id: FilterTypeInput
  is_in_stock: FilterTypeInput
  stock: StockFilterInput
  status: FilterTypeInput
  size: FilterTypeInput
  size_options: FilterTypeInput
  color: FilterTypeInput
  color_options: FilterTypeInput
  or: ProductFilterInput
}

export type ProductSortInput = {
  name: SortEnum
  sku: SortEnum
  description: SortEnum
  short_description: SortEnum
  price: SortEnum
  final_price: SortEnum
  special_price: SortEnum
  special_from_date: SortEnum
  special_to_date: SortEnum
  weight: SortEnum
  manufacturer: SortEnum
  meta_title: SortEnum
  meta_keyword: SortEnum
  meta_description: SortEnum
  image: SortEnum
  small_image: SortEnum
  thumbnail: SortEnum
  tier_price: SortEnum
  news_from_date: SortEnum
  news_to_date: SortEnum
  custom_layout_update: SortEnum
  options_container: SortEnum
  required_options: SortEnum
  has_options: SortEnum
  image_label: SortEnum
  small_image_label: SortEnum
  thumbnail_label: SortEnum
  created_at: SortEnum
  updated_at: SortEnum
  country_of_manufacture: SortEnum
  custom_layout: SortEnum
  gift_message_available: SortEnum
}

export type LocationFilterInput = {
  city: FilterTypeInput
  country: FilterTypeInput
  service: FilterTypeInput
  type: FilterTypeInput
  id: FilterTypeInput
  miuz_id: FilterTypeInput
}

export enum SortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum CategoriesQueryType {
  list = 'LIST',
  filtered = 'FILTERED',
}

export enum ProductsQueryType {
  list = 'LIST',
  detail = 'DETAIL',
}

export type CategoryProductParams = {
  productSearch?: String
  productFilter?: ProductFilterInput
  productPageSize?: number
  productCurrentPage?: number
  productSort?: ProductSortInput
}

export interface ProductDetailParams {

  id?: number | string;

  sku?: number | string;
}

export interface ProductsSearchParams {

  pageSize?: number;

  currentPage?: number;

  sort?: any;

  term?: any;

  filter?: any;

  productParams?: CategoryProductParams

  [x: string]: any;
}

export interface LocationsSearchParams {

  pageSize?: number;

  currentPage?: number;

  filter?: any;

  [x: string]: any;
}

export interface CategorySearchParams {
  pageSize?: number;

  currentPage?: number;

  search?: string;

  filter?: any;

  sort?: any;

  [x: string]: any;
}

export type AttributeMetaDataOption = {
  label: string
  value: string
}

export interface AttributeMetaData {
  attribute_code?: string;
  default_frontend_label?: string;
  attribute_type?: string;
  options?: [AttributeMetaDataOption]
}

export interface CustomQuery {
  query?: any;
  variables?: any;
};

export type Geo = {
  country: string
  city: string
  region: string
  district: string
  lat: string
  lng: string
}

export type Distance = {
  from: string
  to: string
  distance: string
  locations: [LocationInterface]
}

export interface AgnosticPrice {

  regular: number | null;

  special?: number | null;

}

export interface AgnosticAttribute {

  name?: string;

  value: string | Record<string, any>;

  label: string;

}

export interface AgnosticMediaGalleryItem {

  image: string;

  type: string;

  url: string;

  label: string;

}

export interface Gallery360Item {
  uri: string
}