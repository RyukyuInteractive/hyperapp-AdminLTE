import { bindWhenNotBound, h, injectable, InjectableFunction } from '../kernel'

import { default as $ } from 'jquery'

import 'jquery-sparkline'

@bindWhenNotBound()()
@injectable()
export class SparklinesComponent extends InjectableFunction<(arg1: any, arg2: any) => any> {
  constructor () {
    super((attrs, children) => this.view(attrs, children))
  }

  public view (attrs, children) {
    return (state, actions) => (
      <div {...attrs} oncreate={(element) => this.onCreate(element, attrs)}>
        {children}
      </div>
    )
  }

  private onCreate (element, attrs) {
    this.applyLibrary(element, attrs)
  }

  private applyLibrary (element, attrs) {
    const data = this.parseJson(attrs.data) || 'html'
    const options = this.parseJson(attrs.options) || {}
    const type = attrs.type || 'bar'

    $(element).sparkline(data, {
      type,
      ...options
    })
  }

  private parseJson (value) {
    try {
      return 'object' === typeof value ? value : JSON.parse(value)
    } catch (e) {
      return null
    }
  }
}
