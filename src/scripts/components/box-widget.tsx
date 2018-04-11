import { bindWhenNotBound, h, injectable, InjectableFunction } from '../kernel'

import { default as $ } from 'jquery'

import 'admin-lte'

@bindWhenNotBound()()
@injectable()
export class BoxWidgetComponent extends InjectableFunction<(arg1: any, arg2: any) => any> {
  constructor () {
    super((attrs, children) => this.view(attrs, children))
  }

  public view (attrs, children) {
    if (null == attrs.class) {
      attrs.class = ''
    }
    attrs.class += ' box'
    return (state, actions) => (
      <div oncreate={(element) => this.onCreate(element, attrs)} {...attrs}>
        {children}
      </div>
    )
  }

  private onCreate (element, attrs) {
    $(element).boxWidget(attrs.option)
  }
}
