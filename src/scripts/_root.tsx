import { bindWhenNotBound, h, inject, injectable, InjectableFunction } from './kernel'

@bindWhenNotBound()()
@injectable()
export class Root extends InjectableFunction {
  constructor (
    @inject('Routes') private routes,
    @inject('HeaderComponent') private header,
    @inject('SidebarComponent') private sidebar,
    @inject('ControlSidebarComponent') private controlSidebar,
    @inject('LayoutComponent') private layout
  ) {
    super((attrs, children) => this.view(attrs, children))
  }

  public view (attrs, children) {
    return (state, actions) => (
      <this.layout>
        <header class="main-header">
          <this.header />
        </header>

        <aside class="main-sidebar">
          <this.sidebar />
        </aside>

        <div class="content-wrapper">
          <this.routes />
        </div>

        <footer class="main-footer">
          <div class="pull-right hidden-xs">
            <b>Version</b> 2.4.0
          </div>
          <strong>
            Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.
          </strong>{' '}
          All rights reserved.
        </footer>

        <this.controlSidebar />
      </this.layout>
    )
  }
}
