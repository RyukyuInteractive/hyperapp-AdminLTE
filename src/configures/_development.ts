const configureKey = 'configure'

window[configureKey] = {
  ...(window[configureKey] || {}),
  ...{
    // endpoint: "http://localhost:3000"
  }
}
