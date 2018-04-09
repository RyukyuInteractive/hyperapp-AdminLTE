import { bindWhenNotBound, h, injectable, InjectableFunction } from '../kernel'

import { default as $ } from 'jquery'

import 'admin-lte'

@bindWhenNotBound()()
@injectable()
export class TreeComponent extends InjectableFunction<(arg1: any, arg2: any) => any> {
  constructor () {
    super((attrs, childlen) => this.view(attrs, childlen))
  }

  public view (attrs, childlen) {
    return (state, actions) => (
      <ul oncreate={(element) => this.onCreate(element, attrs)} {...attrs}>
        {childlen}
      </ul>
    )
  }

  private onCreate (element, attrs) {
    $(element).tree(attrs.option)
  }
}
