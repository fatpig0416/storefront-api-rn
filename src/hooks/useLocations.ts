import { useCallback, useEffect, useState } from 'react'

import { handleErrors, useSFContext, LocationsSearchParams } from './../api-client'
import { LocationsData, UseData } from './types'

const initialData: LocationsData = {
  items: [],
  pageInfo: {
    current_page: 1,
    page_size: 0
  },
  total: 0,
}

const useLocations = (params: LocationsSearchParams = {}): UseData<LocationsData> => {
  const [data, setData] = useState<LocationsData>(initialData)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()

  const search = useCallback(async (_params, callback = undefined) => {
    if (!Boolean(_params)) {
      setData(initialData)
      return
    }
  
    setLoading(true)
    const context = useSFContext();
    console.log({ _params })
  
    try {
      const locationResponse = await context.api.getLocation({ ..._params });
    
      const locations = {
        items: locationResponse?.data?.locations?.items || [],
        total: locationResponse?.data?.locations?.total_count?.value || 0,
        pageInfo: locationResponse?.data?.locations?.page_info,
      };
  
      setData(locations)
      setLoading(false)
      setError(null)
    } catch (e) {
      setData(initialData)
      setLoading(false)
      setError(handleErrors(e))
    }
    if (callback) callback()
  }, [])
  
  useEffect(() => {
    search(params)
  }, [search])
  
  return {
    data,
    loading,
    reload: search,
    error,
  };
}

export default useLocations