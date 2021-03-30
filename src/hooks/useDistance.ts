import { useCallback, useEffect, useState } from 'react'

import { handleErrors, useSFContext } from './../api-client'
import { UseDatum, Distance } from './types'

const useDistance = (city: string): UseDatum<Distance> => {
  const [data, setData] = useState<Distance>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()

  const search = useCallback(async (_city) => {
    if (!_city) return
    setLoading(true)
    const context = useSFContext();
  
    try {
      const response = await context.api.getDistance(_city);
      setData(response?.data?.distance)
      setLoading(false)
      setError(null)
    } catch (e) {
      setData(undefined)
      setLoading(false)
      setError(handleErrors(e))
    }
  }, [])
  
  useEffect(() => {
    if (Boolean(city)) search(city)
  }, [search])
  
  return {
    data,
    loading,
    reload: search,
    error,
  };
}

export default useDistance
