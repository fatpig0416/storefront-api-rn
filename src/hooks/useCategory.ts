import { useCallback, useEffect, useState } from 'react'

import { handleErrors, useSFContext } from './../api-client'
import { CategoriesQueryType, CategoryProductParams } from './../types'
import { CategoryInterface as Category, UseDatum } from './types'

const useCategory = (id: string | number, productParams?: CategoryProductParams): UseDatum<Category> => {
  const [data, setData] = useState<Category>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()

  const search = useCallback(async (params, callback = undefined) => {
    setLoading(true)
    const context = useSFContext();
  
    const filters = { id: { eq: id } }
    try {
      const categoryResponse = await context.api.getCategory({
        filter: filters,
        queryType: CategoriesQueryType.filtered,
        productParams: params,
      });
  
      setData((categoryResponse?.data?.categories?.items || [])[0])
      setLoading(false)
      setError(null)
    } catch (e) {
      setData(undefined)
      setLoading(false)
      setError(handleErrors(e))
    }
    if (callback) callback()
  }, [])
  
  useEffect(() => {
    if (Boolean(id)) {
      search(productParams)
    }
  }, [search])
  
  return {
    data,
    loading,
    reload: search,
    error,
  };
}

export default useCategory
