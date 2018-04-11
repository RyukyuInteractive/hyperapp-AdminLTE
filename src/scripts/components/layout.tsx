import { bindWhenNotBound, h, injectable, InjectableFunction } from '../kernel'

import { default as $ } from 'jquery'

import 'admin-lte'

@bindWhenNotBound()()
@injectable()
export class LayoutComponent extends InjectableFunction<(arg1: any, arg2: any) => any> {
  constructor () {
    super((attrs, children) => this.view(attrs, children))
  }

  public view (attrs, children) {
    return (state, actions) => (
      <div oncreate={(element) => this.onCreate(element, attrs)} {...attrs}>
        <div class="wrapper">{children}</div>
      </div>
    )
  }

  private onCreate (element, attrs) {
    $(element).layout(attrs.option)
  }
}
