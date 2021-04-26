import { AgnosticAttribute, ConfigurableOption, ProductInterface as Product } from './../types';

export const getAttributeValue = (attribute) => {
  return attribute.values;
};

export const formatAttributeList = (attributes: ConfigurableOption[]): AgnosticAttribute[] =>
  attributes.map((attr) => {
    const attrValue = getAttributeValue(attr);
    return {
      name: attr.attribute_code,
      value: attrValue,
      label: attr.label
    };
  });

export const getVariantByAttributes = (product: Product, attributes: any): Product => {
  if (!product) {
    return null;
  }

  const configurationKeys = Object.keys(attributes);
  
  return product.configurable_children.find((product) => {
    return configurationKeys.every((attrName) =>
      product.hasOwnProperty(attrName) && product[attrName] == attributes[attrName]
    );
  }) || product.configurable_children[0];
};
