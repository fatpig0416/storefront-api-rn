export const handleErrors = (error: any): string => {
  if (typeof error === 'string') {
    return error
  }
  let errorMessage = ''
  if (Boolean(error?.graphQLErrors?.length) && Boolean(error.graphQLErrors[0].extensions?.validation)) {
    Object.values(error.graphQLErrors[0].extensions?.validation).forEach((errorFieldMessages: any) => {
      if (typeof errorFieldMessages === 'string') {
        if (!errorMessage.includes(errorFieldMessages)) {
          errorMessage += `${errorMessage ? '\n' : ''}${errorFieldMessages}`
        }
      } else {
        errorFieldMessages.forEach((message) => {
          if (!errorMessage.includes(errorFieldMessages)) {
            errorMessage += `${errorMessage ? '\n' : ''}${message}`
          }
        })
      }
    })
  }

  return errorMessage || error?.message
}
