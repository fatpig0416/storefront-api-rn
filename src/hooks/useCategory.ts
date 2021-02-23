import { useCallback, useEffect, useState } from 'react'

import { handleErrors, useSFContext } from './../api-client'
import { CategoryInterface as Category, UseDatum } from './types'

const useCategory = (id: string | number): UseDatum<Category> => {
  const [data, setData] = useState<Category>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()

  const search = useCallback(async () => {
    setLoading(true)
    const context = useSFContext();
  
    const filters = { id: { eq: id } }
    try {
      const categoryResponse = await context.api.getCategory({
        filter: filters,
      });
  
      setData((categoryResponse?.data?.categories?.items || [])[0])
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

export default useCategory
