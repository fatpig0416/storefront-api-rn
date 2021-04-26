import {
  AgnosticPrice,
  AgnosticAttribute,
  AgnosticMediaGalleryItem,
  ConfigurableOption,
  ProductInterface as Product,
  Gallery360Item,
  ProductGetters,
} from './../types';

import {
  getVariantByAttributes,
  formatAttributeList
} from './_utils'

type ProductVariantFilters = any

export const getProductPrice = (product: Product): AgnosticPrice => {
  if(!product)
    return {} as AgnosticPrice;
  
  return {
    regular: Math.round(product.original_price) || 0,
    special: Math.round(product.final_price)|| 0,
    credit: Math.round(product.final_price / 10),
    installment: Math.round(product.final_price * 1.1046 / 10),
    discount: 100 - Math.round(product.final_price / product.original_price * 100)
  } as AgnosticPrice;
};

export const getProductGallery360 = (gallery: AgnosticMediaGalleryItem[]): Gallery360Item[] => {
  if (!gallery) return []
  return gallery
    .filter((item) => item.image.indexOf('video') > -1)
    .map(({ image }) => ({ uri: image }))
};


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductFiltered = (product: Product, filters: ProductVariantFilters | any = {}): Product => {
  if (!product)
    return undefined;
  console.log("====1====")

  if (!product.configurable_children)
    return product;
  console.log("====2====")
  if (filters.attributes && Object.keys(filters.attributes).length > 0) {
    return getVariantByAttributes(product, filters.attributes);
  }
  console.log("====3====")
  if(filters.master)
    // do something
  console.log("====4====")
  return product.configurable_children[0];
};

export const getProductAttributes = (products: Product[] | Product, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> => {
  const isSingleProduct = !Array.isArray(products);
  const productList = (isSingleProduct ? [products] : products) as Product[];

  if (!products || productList.length === 0) {
    return {} as any;
  }

  const formatAttributes = (product: Product): AgnosticAttribute[] =>
    formatAttributeList(product.configurable_options).filter((attribute) => filterByAttributeName ? filterByAttributeName.includes(attribute.name) : attribute);

  const reduceToUniques = (prev, curr) => {
    const isAttributeExist = prev.some((el) => el.name === curr.name && el.value === curr.value);

    if (!isAttributeExist) {
      return [...prev, curr];
    }

    return prev;
  };

  const reduceByAttributeName = (prev, curr) => ({
    ...prev,
    [curr.name]: isSingleProduct ? curr.value : [
      ...(prev[curr.name] || []),
      {
        value: curr.value,
        label: curr.label
      }
    ]
  });

  return productList
    .map((product) => formatAttributes(product))
    .reduce((prev, curr) => [...prev, ...curr], [])
    .reduce(reduceToUniques, [])
    .reduce(reduceByAttributeName, {});
};

export const getProductStones = (options: ConfigurableOption[], product: Product): string[] => {
  if (!product || !product.stone_name_mapped)
    return [];

  //console.log(options);
  
  //const stone_name_mapped = getProductAttribute(options, 'stone_name_mapped', product.stone_name_mapped[0]).label;
  //const stone_type = getProductAttribute(options, 'stone_type', product.stone_type[0]).label;
  //const number_of_stones = getProductAttribute(options, 'number_of_stones', product.number_of_stones[0]).label;

  //return [`${number_of_stones} ${stone_type} ${stone_name_mapped}`];
  return [];
};


export const getProductAttribute = (options: ConfigurableOption[], attribute_code: String, value_index: Number): any => {
  const option = options.find((option) => {
    return option.attribute_code === attribute_code
  })
  
  if(!option || !option.values) 
    return {label: ''};
  
  return option.values.find((value) => {
    return value.value_index == value_index
  });
};

const productGetters: ProductGetters<Product, ProductVariantFilters> = {
  getPrice: getProductPrice,
  getFiltered: getProductFiltered,
  getAttributes: getProductAttributes,
  getProductStones,
  getProductGallery360,
  getAttribute: getProductAttribute,
};

export default productGetters;
