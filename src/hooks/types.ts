import { ProductInterface, CategoryInterface } from './../api-client'

type ProductsData = {
  items: [ProductInterface];
  total: number;
  availableFilters: JSON;
  availableSortingOptions: any;
}

type CategoriesData = [CategoryInterface]

export interface UseProducts<PRODUCTS> {

  data: PRODUCTS;

  loading: boolean;

  error?: any;

  [x: string]: any;

}

export {
  CategoriesData,
  ProductsData,
};