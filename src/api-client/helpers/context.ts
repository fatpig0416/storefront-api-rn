import { Context } from './../types'

interface ContextConfiguration {
  useSFContext: () => Context
}

let useSFContext = () => ({} as Context)

const configureContext = (config: ContextConfiguration) => {
  useSFContext = config.useSFContext || useSFContext
}

const applyContextForApi = (api, context) =>
  Object.entries(api).reduce(
    (prev, [key, fn]: any) => ({
      ...prev,
      [key]: (...args) => fn(context, ...args),
    }),
    {},
  )


export { useSFContext, configureContext, applyContextForApi }
