import merge from 'lodash-es/merge'
import { applyContextForApi } from './context'

interface BaseConfig {
  [x: string]: any
  client?: any
}

interface FactoryParams<T, F = any> {
  tag: string
  onSetup: (config: T) => { config: T; client: any }
  api: F
}

export interface ApiClientInstance {
  api: any
  client: any
  settings: any
}

export function apiClientFactory<ALL_SETTINGS extends BaseConfig, ALL_FUNCTIONS>(
  factoryParams: FactoryParams<ALL_SETTINGS, ALL_FUNCTIONS>,
) {
  const createApiClient = (config: ALL_SETTINGS, customApi: any = {}): ApiClientInstance => {
    const settings = factoryParams.onSetup
      ? (merge(config, factoryParams.onSetup(config)) as ALL_SETTINGS)
      : { config, client: config.client }

    const api = applyContextForApi({ ...factoryParams.api, ...customApi }, settings)

    return {
      api,
      client: settings.client,
      settings: settings.config,
    }
  }

  createApiClient.tag = factoryParams.tag

  return { createApiClient }
}
