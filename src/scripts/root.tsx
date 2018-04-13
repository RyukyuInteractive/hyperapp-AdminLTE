import { h } from 'hyperapp'

import { LayoutComponent } from './components/layout'
import { ControlSidebar } from './control-sidebar'
import { Header } from './header'
import { Routes } from './routes'
import { Sidebar } from './sidebar'

export function Root (attrs, children) {
  return (state, actions) => (
    <LayoutComponent>
      <header class="main-header">
        <Header />
      </header>

      <aside class="main-sidebar">
        <Sidebar />
      </aside>

      <div class="content-wrapper">
        <Routes />
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

      <ControlSidebar />
    </LayoutComponent>
  )
}
