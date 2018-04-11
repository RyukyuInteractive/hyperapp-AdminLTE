import { bindWhenNotBound, h, injectable, InjectableFunction } from '../kernel'

import { default as $ } from 'jquery'

import 'jvectormap'

@bindWhenNotBound()()
@injectable()
export class VectorMapComponent extends InjectableFunction<(arg1: any, arg2: any) => any> {
  constructor () {
    super((attrs, children) => this.view(attrs, children))
  }

  public view (attrs, children) {
    return (state, actions) => (
      <div
        {...attrs}
        oncreate={(element) => this.onCreate(element, attrs)}
        onupdate={(element) => this.onUpdate(element, attrs)}
      />
    )
  }

  private onCreate (element, attrs) {
    this.applyLibrary(element, attrs)
  }

  private onUpdate (element, attrs) {
    this.applyLibrary(element, attrs)
  }

  private applyLibrary (element, attrs) {
    const data = this.parseJson(attrs.data)
    $(element).vectorMap(data)
  }

  private parseJson (value) {
    try {
      return 'object' === typeof value ? value : JSON.parse(value)
    } catch (e) {
      return null
    }
  }
}
