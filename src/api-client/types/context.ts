export interface IntegrationContext<CLIENT = any, CONFIG = any, API = any> {
  client: CLIENT
  config: CONFIG
  api: API
  [x: string]: any
}

export interface Context {
  [x: string]: IntegrationContext | any
}
