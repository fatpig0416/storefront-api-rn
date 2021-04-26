import { AgnosticPrice, Gallery360Item, AgnosticAttribute, AgnosticMediaGalleryItem } from './record'

export interface ProductGetters<PRODUCT, PRODUCT_FILTER> {

  getPrice: (product: PRODUCT) => AgnosticPrice;

  getFiltered: (product: PRODUCT, filters?: PRODUCT_FILTER) => PRODUCT;

  getAttributes: (products: PRODUCT[] | PRODUCT, filters?: Array<string>) => Record<string, AgnosticAttribute | string>;

  getProductGallery360: (gallery: AgnosticMediaGalleryItem[]) => Gallery360Item[];

  [getterName: string]: any;

}