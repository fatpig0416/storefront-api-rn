import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { useSFContext, ProductsQueryType, ProductsSearchParams } from './../api-client'
import { ProductsData, UseProducts } from './types'

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

const useProducts = (params: ProductsSearchParams = {}): UseProducts<ProductsData> => {
  const [data, setData] = useState<ProductsData>()
  const [loading, setLoading] = useState<boolean>(true)

  const search = useCallback(async () => {
    setLoading(true)
    const context = useSFContext();

    const { perPage, page, sort, filters, search } = params
  
    const productResponse = await context.api.getProduct({
      pageSize: perPage,
      currentPage: page,
      filter: filters,
      queryType: ProductsQueryType.list,
      search,
      sort,
    });
  
    const products = {
      items: productResponse?.data?.products?.items || [],
      total: productResponse?.data?.products?.total_count?.value || 0,
      availableFilters: productResponse?.data?.products?.aggregations,
      availableSortingOptions
    };

    setData(products)
    setLoading(false)
  }, [])
  
  useEffect(() => {
    search()
  }, [search])
  
  return {
    data,
    loading,
  };

}

export default useProducts