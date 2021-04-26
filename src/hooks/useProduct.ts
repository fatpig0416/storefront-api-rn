import { useCallback, useEffect, useState } from 'react'

import { handleErrors, useSFContext } from './../api-client'
import { ProductsQueryType, ProductDetailParams } from './../types'
import { ProductInterface as Product, UseDatum } from './types'


const useProduct = (params: ProductDetailParams = {}): UseDatum<Product> => {
  const [data, setData] = useState<Product>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()

  const { id,  sku } = params
  const search = useCallback(async () => {
    setLoading(true)
    const context = useSFContext();
  
    const filters = id ? { id: { eq: id } } : { sku: { eq: sku } }

    try {
      const productResponse = await context.api.getProduct({
        filter: filters,
        queryType: ProductsQueryType.detail,
      });

      setData((productResponse?.data?.products?.items || [])[0])
      setLoading(false)
      setError(null)
    } catch (e) {
      setData(undefined)
      setLoading(false)
      setError(handleErrors(e))
    }
  }, [])
  
  useEffect(() => {
    if (Boolean(id) || Boolean(sku)) search()
  }, [search])
  
  return {
    data,
    loading,
    error,
  };
}

export default useProduct
