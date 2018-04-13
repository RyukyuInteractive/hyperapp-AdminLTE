import { h } from 'hyperapp'

import { Route, Switch } from '@hyperapp/router'

import { deepGet, deepSet, flattenObject } from './helpers'

const provides = {
  home: () => import('./pages/home')
}

const provideds = {}

const flatProviders = flattenObject(provides) as { [key: string]: () => Promise<any> }

export function Routes (attrs, children) {
  return (state, actions) => (
    <Switch>
      {Object.entries(flatProviders).map(([key, provide]) => {
        const path =
          key === 'home'
            ? '/'
            : '/' +
              key
                .replace(/([A-Z])/g, (_, p1) => `-${p1.toUpperCase()}`)
                .replace(/\./g, '/')
                .replace(/\/index/, '')
                .replace(/\/single/, '/:id')

        return (
          <Route
            path={path}
            render={(routeState) => {
              const provided = deepGet<any>(provideds, key)

              if (provided) {
                const Component = provided.default || Object.entries(provided)[0][1]
                return <Component route={routeState} />
              }

              deepGet<() => Promise<any>>(provides, key)()
                .then((component) => {
                  deepSet(provideds, key, component)
                  actions.update()
                })
                .catch((err) => {
                  ((console && (console.error || console.log)) || ((e) => e))('error:', err)
                  deepSet(provideds, key, { default: () => <div>Load error</div> })
                })

              return <div>Loading...</div>
            }}
          />
        )
      })}

      <Route render={() => <h1>Not Found!!</h1>} />
    </Switch>
  )
}
