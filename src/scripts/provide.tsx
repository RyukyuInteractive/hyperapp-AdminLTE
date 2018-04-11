import { bindWhenNotBound, h, injectable, InjectableFunction, kernel } from './kernel'

import { deepGet } from './helpers'

const providers = {}

@bindWhenNotBound()()
@injectable()
export class Provide extends InjectableFunction {
  constructor () {
    super((attrs, children) => this.view(attrs, children))
  }

  public view (attrs, children) {
    return (state, actions) => {
      const name = attrs.provider
      const sourceName = attrs.source || name.replace(/Provider$/, '')

      if (kernel.isBound(sourceName)) {
        attrs.state = attrs.state || deepGet(state, sourceName) || {}
        attrs.actions = attrs.actions || deepGet(actions, sourceName) || {}

        return [[attrs], [state, actions]].reduce(
          (acc, args) => ('function' === typeof acc && acc.apply(acc, args)) || acc,
          kernel.get(sourceName) as any
        )
      }

      if (!providers[name]) {
        const provider = kernel.get(name) as () => Promise<any>

        provider()
          .then(actions.update)
          .catch((err) =>
            ((console && console.error) || console.log || ((e) => e))(
              'error: ' + err.toString(),
              err
            )
          )

        providers[name] = provider
      }

      return <div>loading...</div>
    }
  }
}
