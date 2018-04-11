import { bindWhenNotBound, h, injectable, InjectableFunction } from '../kernel'

import { default as $ } from 'jquery'

import 'admin-lte'

@bindWhenNotBound()()
@injectable()
export class TreeComponent extends InjectableFunction<(arg1: any, arg2: any) => any> {
  constructor () {
    super((attrs, children) => this.view(attrs, children))
  }

  public view (attrs, children) {
    return (state, actions) => (
      <ul oncreate={(element) => this.onCreate(element, attrs)} {...attrs}>
        {children}
      </ul>
    )
  }

  private onCreate (element, attrs) {
    $(element).tree(attrs.option)
  }
}
