import * as api from './api'
import { onSetup, useSFContext } from './helpers'
import { apiClientFactory, handleErrors } from './helpers'

const { createSFApiClient } = apiClientFactory<any, any>({
  onSetup,
  api,
})

export { useSFContext, createSFApiClient, handleErrors }