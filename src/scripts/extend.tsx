import { bindWhenNotBound, h, inject, injectable, InjectableFunction } from './kernel'

import { deepGet, deepSet, flattenObject } from './helpers'

@bindWhenNotBound()()
@injectable()
export class Extend extends InjectableFunction {
  constructor (@inject('App') private app) {
    super((attrs, childlen) => this.view(attrs, childlen))
  }

  public view (attrs, childlen) {
    attrs.actions = attrs.actions || {}

    if (!attrs.__actions) {
      const resolvedScope = {}
      deepSet(resolvedScope, attrs.scope, attrs.actions)
      attrs.__actions = flattenObject(resolvedScope)
    }

    let isRetouch = false

    for (const [path, fn] of Object.entries(attrs.__actions)) {
      if (null == deepGet<any>(this.app.pureActions, path)) {
        isRetouch = true
        deepSet(this.app.pureActions, path, fn)
      }
    }

    if (isRetouch) {
      this.app.retouch()
    }

    return (state, actions) => <div>{childlen}</div>
  }
}
