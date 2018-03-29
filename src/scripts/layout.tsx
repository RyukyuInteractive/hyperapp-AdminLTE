import { InjectableFunction, bindWhenNotBound, h, injectable, inject } from './kernel'

import './components/control-sidebar'
import './components/header'
import './components/sidebar'
import './routes'

@bindWhenNotBound()()
@injectable()
export class Layout extends InjectableFunction {

  constructor(
    @inject('Routes') private routes,
    @inject('HeaderComponent') private header,
    @inject('SidebarComponent') private sidebar,
    @inject('ControlSidebarComponent') private controlSidebar,
  ) {
    super((attrs, childlen) => this.view(attrs, childlen))
  }

  view(attrs, childlen) {
    return (state, actions) => (
      <div>
        <header class="main-header">
          <this.header />
        </header>

        <aside class="main-sidebar">
          <this.sidebar />
        </aside>

        <div class="content-wrapper" style="min-height: 864px;">
          <this.routes />
        </div>

        <footer class="main-footer">
          <div class="pull-right hidden-xs">
            <b>Version</b> 2.4.0
          </div>
          <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
          reserved.
        </footer>

        <aside class="control-sidebar control-sidebar-dark">
          <this.controlSidebar />
        </aside>
      </div>
    )
  }
}
