const configureKey = 'configure'

window[configureKey] = {
  ...(window[configureKey] || {}),
  ...{
    // endpoint: "https://production-endpoint"
  }
}
