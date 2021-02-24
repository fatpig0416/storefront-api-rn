import { useCallback, useEffect, useState } from 'react'

import { handleErrors, useSFContext, CategorySearchParams } from './../api-client'
import { CategoriesData, UseData } from './types'

const useCategories = (params: CategorySearchParams = {}): UseData<CategoriesData> => {
  const [data, setData] = useState<CategoriesData>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()

  const search = useCallback(async () => {
    setLoading(true)
    const context = useSFContext();
  
    try {
      const categoryResponse = await context.api.getCategory(params);
    
      const categories = {
        items: categoryResponse?.data?.categories?.items || [],
        total: categoryResponse?.data?.categories?.total_count?.value || 0,
      };
  
      setData(categories)
      setLoading(false)
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

export default useCategories