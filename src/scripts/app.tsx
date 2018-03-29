import { h, bindWhenNotBound, injectable, inject } from './kernel'

import './layout'

@bindWhenNotBound()(binding => binding.inSingletonScope())
@injectable()
export class App {

  pureActions: any = {
    location: this.location.actions,
    update: () => ({})
  }

  actions: any = {}

  state: any = {
    location: this.location.state
  }

  unsubscribeLocation: (() => void) = () => { }

  constructor(
    @inject('Layout') private layout,
    @inject('appEntryPoint') private entryPoint,
    @inject('hyperapp') private app,
    @inject('kernel') private kernel,
    @inject('location') private location,
  ) {
    this.attach()
  }

  attach() {
    this.unsubscribeLocation()

    this.actions = this.app(
      this.state,
      this.pureActions,
      () => <this.layout />,
      this.entryPoint
    )

    this.unsubscribeLocation = this.location.subscribe(this.actions.location)
  }

  retouch() {
    setTimeout(this.attach.bind(this), 0)
  }

}
