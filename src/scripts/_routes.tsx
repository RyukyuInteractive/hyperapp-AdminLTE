import { bindWhenNotBound, h, inject, injectable, InjectableFunction, kernel } from './kernel'

import { flattenObject } from './helpers'
import { Provide } from './provide'

const provides = {
  pages: {
    home: () => import('./pages/home')
  }
}

const flatProviders = flattenObject(provides) as { [key: string]: () => Promise<any> }

for (const [provide, doImport] of Object.entries(flatProviders)) {
  kernel
    .bind(`${provide}Provider`)
    .toProvider((context: any) => (): Promise<any> =>
      kernel.isBound(provide) ? Promise.resolve(kernel.get(provide)) : doImport()
    )
}

@bindWhenNotBound()()
@injectable()
export class Routes extends InjectableFunction {
  constructor (
    @inject('Route') private route,
    @inject('RouteSwitch') private routeSwitch,
    @inject(Provide) private provide
  ) {
    super((attrs, childlen) => this.view(attrs, childlen))
  }

  public view (attrs, childlen) {
    return (state, actions) => (
      <this.routeSwitch>
        <this.route
          path="/"
          render={(routeState) => <this.provide provider="pages.homeProvider" route={routeState} />}
        />
        <this.route render={() => <h1>Not Found!!</h1>} />
      </this.routeSwitch>
    )
  }
}
