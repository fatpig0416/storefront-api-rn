import { useCallback, useEffect, useState } from 'react'

import { handleErrors, useSFContext, ProductsQueryType, ProductsSearchParams } from './../api-client'
import { ProductsData, UseData } from './types'

const availableSortingOptions = [{
  value: 'latest',
  label: 'Latest'
}, {
  value: 'price-up',
  label: 'Price from low to high'
}, {
  value: 'price-down',
  label: 'Price from high to low'
}];

const useProducts = (params: ProductsSearchParams = {}): UseData<ProductsData> => {
  const [data, setData] = useState<ProductsData>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()

  const search = useCallback(async () => {
    setLoading(true)
    const context = useSFContext();
  
    try {
      const productResponse = await context.api.getProduct({
        ...params,
        queryType: ProductsQueryType.list,
      });
    
      const products = {
        items: productResponse?.data?.products?.items || [],
        total: productResponse?.data?.products?.total_count?.value || 0,
        availableFilters: productResponse?.data?.products?.aggregations,
        availableSortingOptions
      };
  
      setData(products)
      setLoading(false)
      setError(null)
    } catch (e) {
      setData(undefined)
      setLoading(false)
      setError(handleErrors(e))
    }
  }, [])
  
  useEffect(() => {
    search()
  }, [search])
  
  return {
    data,
    loading,
    error,
  };
}

export default useProducts