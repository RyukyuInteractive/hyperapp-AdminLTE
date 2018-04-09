import { bindWhenNotBound, h, injectable, InjectableFunction } from '../kernel'

import { default as $ } from 'jquery'

import 'admin-lte'

@bindWhenNotBound()()
@injectable()
export class LayoutComponent extends InjectableFunction<(arg1: any, arg2: any) => any> {
  constructor () {
    super((attrs, childlen) => this.view(attrs, childlen))
  }

  public view (attrs, childlen) {
    return (state, actions) => (
      <div oncreate={(element) => this.onCreate(element, attrs)} {...attrs}>
        <div class="wrapper">{childlen}</div>
      </div>
    )
  }

  private onCreate (element, attrs) {
    $(element).layout(attrs.option)
  }
}
