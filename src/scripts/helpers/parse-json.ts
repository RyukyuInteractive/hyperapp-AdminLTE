export function parseJson (value) {
  try {
    return 'string' === typeof value ? JSON.parse(value) : value
  } catch (e) {
    return null
  }
}
