import { useCallback, useEffect, useState } from 'react'

import { handleErrors, useSFContext } from './../api-client'
import { CategoriesQueryType, CategorySearchParams, CustomQuery } from './../types'
import { CategoriesData, UseData } from './types'

const initialData: CategoriesData = {
  items: [],
  total: 0,
}

const useCategories = (params: CategorySearchParams = {}, customQuery?: CustomQuery): UseData<CategoriesData> => {
  const [data, setData] = useState<CategoriesData>(initialData)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()

  const search = useCallback(async () => {
    setLoading(true)
    const context = useSFContext();
  
    try {
      const categoryResponse = await context.api.getCategory(
        {...params, queryType: CategoriesQueryType.list }, 
        customQuery
        );
    
      const categories = {
        items: categoryResponse?.data?.categories?.items || [],
        total: categoryResponse?.data?.categories?.total_count?.value || 0,
      };
  
      setData(categories)
      setLoading(false)
    } catch (e) {
      setData(initialData)
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