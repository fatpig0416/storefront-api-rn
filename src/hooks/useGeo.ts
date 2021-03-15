import { useCallback, useEffect, useState } from 'react'

import { handleErrors, useSFContext } from './../api-client'
import { UseDatum, Geo } from './types'

const useGeo = (ip: string): UseDatum<Geo> => {
  const [data, setData] = useState<Geo>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()

  const search = useCallback(async (_ip) => {
    if (!_ip) return
    setLoading(true)
    const context = useSFContext();
  
    try {
      const response = await context.api.getGeo(_ip);
      setData(response?.data?.geo)
      setLoading(false)
      setError(null)
    } catch (e) {
      setData(undefined)
      setLoading(false)
      setError(handleErrors(e))
    }
  }, [])
  
  useEffect(() => {
    if (Boolean(ip)) search(ip)
  }, [search])
  
  return {
    data,
    loading,
    reload: search,
    error,
  };
}

export default useGeo
