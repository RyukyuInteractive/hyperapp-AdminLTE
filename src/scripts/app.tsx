import { bindWhenNotBound, h, inject, injectable } from './kernel'

@bindWhenNotBound()((binding) => binding.inSingletonScope())
@injectable()
export class App {
  public pureActions: any = {
    location: this.location.actions,
    update: () => ({})
  }

  public actions: any = {}

  public state: any = {
    location: this.location.state
  }

  constructor (
    @inject('Root') private root,
    @inject('appEntryPoint') private entryPoint,
    @inject('hyperapp') private app,
    @inject('location') private location
  ) {
    this.attach()
  }

  public unsubscribeLocation: (() => void) = () => void 0

  public attach () {
    this.unsubscribeLocation()

    this.actions = this.app(this.state, this.pureActions, () => <this.root />, this.entryPoint)

    this.unsubscribeLocation = this.location.subscribe(this.actions.location)
  }

  public retouch () {
    setTimeout(this.attach.bind(this), 0)
  }
}
