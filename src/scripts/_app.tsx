import { app as hyperapp, h } from 'hyperapp'

import { location } from '@hyperapp/router'

import { Root } from './root'

class App {
  public pureActions: any = {
    location: location.actions,
    update: (state = {}) => state
  }

  public actions: any = {}

  public state: any = {
    location: location.state
  }

  constructor (private entryPoint) {
    this.attach()
  }

  public unsubscribeLocation: (() => void) = () => void 0

  public attach () {
    this.unsubscribeLocation()

    this.actions = hyperapp(this.state, this.pureActions, () => <Root />, this.entryPoint)

    this.unsubscribeLocation = location.subscribe(this.actions.location)
  }

  public retouch () {
    setTimeout(this.attach.bind(this), 0)
  }
}

export const app = new App(document.getElementById('app'))
