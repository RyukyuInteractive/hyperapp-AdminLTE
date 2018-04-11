import { bindWhenNotBound, h, inject, injectable, InjectableFunction } from '../kernel'

import './tree'

import { images } from '../assets/index'

@bindWhenNotBound()()
@injectable()
export class SidebarComponent extends InjectableFunction {
  constructor (@inject('TreeComponent') private treeComponent) {
    super((attrs, children) => this.view(attrs, children))
  }

  public view (attrs, children) {
    return (state, actions) => (
      <div>
        <section class="sidebar">
          <div class="user-panel">
            <div class="pull-left image">
              <img src={images.user2_160x160} class="img-circle" alt="User Image" />
            </div>
            <div class="pull-left info">
              <p>Alexander Pierce</p>
              <a href="#">
                <i class="fa fa-circle text-success" /> Online
              </a>
            </div>
          </div>

          <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
              <input type="text" name="q" class="form-control" placeholder="Search..." />
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat">
                  <i class="fa fa-search" />
                </button>
              </span>
            </div>
          </form>

          <this.treeComponent class="sidebar-menu">
            <li class="header">MAIN NAVIGATION</li>
            <li class="active treeview menu-open">
              <a href="#">
                <i class="fa fa-dashboard" /> <span>Dashboard</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul class="treeview-menu">
                <li>
                  <a href="index.html">
                    <i class="fa fa-circle-o" /> Dashboard v1
                  </a>
                </li>
                <li class="active">
                  <a href="index2.html">
                    <i class="fa fa-circle-o" /> Dashboard v2
                  </a>
                </li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-files-o" />
                <span>Layout Options</span>
                <span class="pull-right-container">
                  <span class="label label-primary pull-right">4</span>
                </span>
              </a>
              <ul class="treeview-menu">
                <li>
                  <a href="pages/layout/top-nav.html">
                    <i class="fa fa-circle-o" /> Top Navigation
                  </a>
                </li>
                <li>
                  <a href="pages/layout/boxed.html">
                    <i class="fa fa-circle-o" /> Boxed
                  </a>
                </li>
                <li>
                  <a href="pages/layout/fixed.html">
                    <i class="fa fa-circle-o" /> Fixed
                  </a>
                </li>
                <li>
                  <a href="pages/layout/collapsed-sidebar.html">
                    <i class="fa fa-circle-o" /> Collapsed Sidebar
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="pages/widgets.html">
                <i class="fa fa-th" /> <span>Widgets</span>
                <span class="pull-right-container">
                  <small class="label pull-right bg-green">new</small>
                </span>
              </a>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-pie-chart" />
                <span>Charts</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul class="treeview-menu">
                <li>
                  <a href="pages/charts/chartjs.html">
                    <i class="fa fa-circle-o" /> ChartJS
                  </a>
                </li>
                <li>
                  <a href="pages/charts/morris.html">
                    <i class="fa fa-circle-o" /> Morris
                  </a>
                </li>
                <li>
                  <a href="pages/charts/flot.html">
                    <i class="fa fa-circle-o" /> Flot
                  </a>
                </li>
                <li>
                  <a href="pages/charts/inline.html">
                    <i class="fa fa-circle-o" /> Inline charts
                  </a>
                </li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-laptop" />
                <span>UI Elements</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul class="treeview-menu">
                <li>
                  <a href="pages/UI/general.html">
                    <i class="fa fa-circle-o" /> General
                  </a>
                </li>
                <li>
                  <a href="pages/UI/icons.html">
                    <i class="fa fa-circle-o" /> Icons
                  </a>
                </li>
                <li>
                  <a href="pages/UI/buttons.html">
                    <i class="fa fa-circle-o" /> Buttons
                  </a>
                </li>
                <li>
                  <a href="pages/UI/sliders.html">
                    <i class="fa fa-circle-o" /> Sliders
                  </a>
                </li>
                <li>
                  <a href="pages/UI/timeline.html">
                    <i class="fa fa-circle-o" /> Timeline
                  </a>
                </li>
                <li>
                  <a href="pages/UI/modals.html">
                    <i class="fa fa-circle-o" /> Modals
                  </a>
                </li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-edit" /> <span>Forms</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul class="treeview-menu">
                <li>
                  <a href="pages/forms/general.html">
                    <i class="fa fa-circle-o" /> General Elements
                  </a>
                </li>
                <li>
                  <a href="pages/forms/advanced.html">
                    <i class="fa fa-circle-o" /> Advanced Elements
                  </a>
                </li>
                <li>
                  <a href="pages/forms/editors.html">
                    <i class="fa fa-circle-o" /> Editors
                  </a>
                </li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-table" /> <span>Tables</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul class="treeview-menu">
                <li>
                  <a href="pages/tables/simple.html">
                    <i class="fa fa-circle-o" /> Simple tables
                  </a>
                </li>
                <li>
                  <a href="pages/tables/data.html">
                    <i class="fa fa-circle-o" /> Data tables
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="pages/calendar.html">
                <i class="fa fa-calendar" /> <span>Calendar</span>
                <span class="pull-right-container">
                  <small class="label pull-right bg-red">3</small>
                  <small class="label pull-right bg-blue">17</small>
                </span>
              </a>
            </li>
            <li>
              <a href="pages/mailbox/mailbox.html">
                <i class="fa fa-envelope" /> <span>Mailbox</span>
                <span class="pull-right-container">
                  <small class="label pull-right bg-yellow">12</small>
                  <small class="label pull-right bg-green">16</small>
                  <small class="label pull-right bg-red">5</small>
                </span>
              </a>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-folder" /> <span>Examples</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul class="treeview-menu">
                <li>
                  <a href="pages/examples/invoice.html">
                    <i class="fa fa-circle-o" /> Invoice
                  </a>
                </li>
                <li>
                  <a href="pages/examples/profile.html">
                    <i class="fa fa-circle-o" /> Profile
                  </a>
                </li>
                <li>
                  <a href="pages/examples/login.html">
                    <i class="fa fa-circle-o" /> Login
                  </a>
                </li>
                <li>
                  <a href="pages/examples/register.html">
                    <i class="fa fa-circle-o" /> Register
                  </a>
                </li>
                <li>
                  <a href="pages/examples/lockscreen.html">
                    <i class="fa fa-circle-o" /> Lockscreen
                  </a>
                </li>
                <li>
                  <a href="pages/examples/404.html">
                    <i class="fa fa-circle-o" /> 404 Error
                  </a>
                </li>
                <li>
                  <a href="pages/examples/500.html">
                    <i class="fa fa-circle-o" /> 500 Error
                  </a>
                </li>
                <li>
                  <a href="pages/examples/blank.html">
                    <i class="fa fa-circle-o" /> Blank Page
                  </a>
                </li>
                <li>
                  <a href="pages/examples/pace.html">
                    <i class="fa fa-circle-o" /> Pace Page
                  </a>
                </li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-share" /> <span>Multilevel</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul class="treeview-menu">
                <li>
                  <a href="#">
                    <i class="fa fa-circle-o" /> Level One
                  </a>
                </li>
                <li class="treeview">
                  <a href="#">
                    <i class="fa fa-circle-o" /> Level One
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul class="treeview-menu">
                    <li>
                      <a href="#">
                        <i class="fa fa-circle-o" /> Level Two
                      </a>
                    </li>
                    <li class="treeview">
                      <a href="#">
                        <i class="fa fa-circle-o" /> Level Two
                        <span class="pull-right-container">
                          <i class="fa fa-angle-left pull-right" />
                        </span>
                      </a>
                      <ul class="treeview-menu">
                        <li>
                          <a href="#">
                            <i class="fa fa-circle-o" /> Level Three
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-circle-o" /> Level Three
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-circle-o" /> Level One
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://adminlte.io/docs">
                <i class="fa fa-book" /> <span>Documentation</span>
              </a>
            </li>
            <li class="header">LABELS</li>
            <li>
              <a href="#">
                <i class="fa fa-circle-o text-red" /> <span>Important</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-circle-o text-yellow" /> <span>Warning</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-circle-o text-aqua" /> <span>Information</span>
              </a>
            </li>
          </this.treeComponent>
        </section>
      </div>
    )
  }
}
