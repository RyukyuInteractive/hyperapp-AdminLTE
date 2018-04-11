import { bindWhenNotBound, h, inject, injectable, InjectableFunction } from './kernel'

@bindWhenNotBound()()
@injectable()
export class Logo extends InjectableFunction {
  constructor (@inject('Link') private link) {
    super((attrs, children) => this.view(attrs, children))
  }

  public view (attrs, children) {
    return (state, actions) => (
      <this.link to="/" class="logo">
        <span class="logo-mini">
          <b>A</b>LT
        </span>
        <span class="logo-lg">
          <b>Admin</b>LTE
        </span>
      </this.link>
    )
  }
}
