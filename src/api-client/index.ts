import * as api from './api'
import { onSetup, useSFContext } from './helpers'
import { apiClientFactory } from './helpers'
export * from './types'

const { createApiClient } = apiClientFactory<any, any>({
  onSetup,
  api,
})

export { useSFContext, createApiClient }