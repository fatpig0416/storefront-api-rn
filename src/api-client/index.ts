import * as api from './api'
import { onSetup } from './helpers'
import { apiClientFactory } from './helpers'
export * from './types'

export const { createApiClient } = apiClientFactory<any, any>({
  tag: 'storefront',
  onSetup,
  api,
})
