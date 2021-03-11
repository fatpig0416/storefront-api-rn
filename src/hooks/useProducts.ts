import { useCallback, useEffect, useState } from 'react'

import { handleErrors, useSFContext, ProductsQueryType, ProductsSearchParams, CustomQuery } from './../api-client'
import { ProductsData, UseData } from './types'

const availableSortingOptions = [{
  value: 'name-up',
  label: 'Name a to z'
}, {
  value: 'name-down',
  label: 'Name z to a'
}, {
  value: 'price-up',
  label: 'Price from low to high'
}, {
  value: 'price-down',
  label: 'Price from high to low'
}];

const initialData: ProductsData = {
  items: [],
  pageInfo: {
    current_page: 1,
    page_size: 0
  },
  total: 0,
}

const useProducts = (params: ProductsSearchParams = {}, customQuery?: CustomQuery): UseData<ProductsData> => {
  const [data, setData] = useState<ProductsData>(initialData)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()

  const search = useCallback(async (_params, callback = undefined) => {
    if (!Boolean(_params)) {
      setData(initialData)
      return
    }
  
    setLoading(true)
    const context = useSFContext();
  
    try {
      const productResponse = await context.api.getProduct(
        { ..._params, queryType: ProductsQueryType.list },
        customQuery
        );
    
      const products = {
        items: productResponse?.data?.products?.items || [],
        total: productResponse?.data?.products?.total_count?.value || 0,
        pageInfo: productResponse?.data?.products?.page_info,
        availableFilters: productResponse?.data?.products?.attribute_metadata,
        availableSortingOptions
      };
  
      setData(products)
      setLoading(false)
      setError(null)
    } catch (e) {
      setData(initialData)
      setLoading(false)
      setError(handleErrors(e))
    }
    if (callback) callback()
  }, [])
  
  useEffect(() => {
    search(params)
  }, [search])
  
  return {
    data,
    loading,
    reload: search,
    error,
  };
}

export default useProducts