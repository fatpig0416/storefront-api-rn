import { ProductInterface, CategoryInterface, SearchResultPageInfo, AttributeMetaData } from './../api-client'

type ProductsData = {
  items: [ProductInterface?];
  total: number;
  pageInfo?: SearchResultPageInfo;
  availableFilters?: [AttributeMetaData];
  availableSortingOptions?: any;
}

type CategoriesData = {
  items: [CategoryInterface?];
  total: number;
}

export interface UseDatum<DATUM> {

  data: DATUM;

  loading: boolean;

  error?: any;

  [x: string]: any;

}

export interface UseData<DATA> {

  data: DATA;

  loading: boolean;

  error?: any;

  [x: string]: any;

}

export {
  CategoriesData,
  ProductsData,
  ProductInterface,
  CategoryInterface,
};