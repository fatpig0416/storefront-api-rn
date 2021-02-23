import { useCallback, useEffect, useState } from 'react'

import { handleErrors, useSFContext, ProductsQueryType } from './../api-client'
import { ProductInterface as Product, UseDatum } from './types'

const useProduct = (id: string | number): UseDatum<Product> => {
  const [data, setData] = useState<Product>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()

  const search = useCallback(async () => {
    setLoading(true)
    const context = useSFContext();
  
    const filters = { id: { eq: id } }
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
    if (Boolean(id)) search()
  }, [search])
  
  return {
    data,
    loading,
    error,
  };
}

export default useProduct
