async function boot () {
  try {
    await import('./_vendor')

    await import('./_app')
  } catch (e) {
    ((console && console.error) || console.log || ((v) => v))(`error: ${e.toString()}`, e)
  }
}

boot()
