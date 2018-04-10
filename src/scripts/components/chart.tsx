import { bindWhenNotBound, h, injectable, InjectableFunction } from '../kernel'

import Chart from 'chart.js'

import { deepSet, flattenObject } from '../helpers'

@bindWhenNotBound()()
@injectable()
export class ChartComponent extends InjectableFunction<(arg1: any, arg2: any) => any> {
  private chart: Chart

  constructor () {
    super((attrs, childlen) => this.view(attrs, childlen))
  }

  public view (attrs, childlen) {
    return (state, actions) => (
      <canvas
        {...attrs}
        oncreate={(element) => this.onCreate(element, attrs)}
        onupdate={(element) => this.onUpdate(element, attrs)}>
        {childlen}
      </canvas>
    )
  }

  private onCreate (element, attrs) {
    const ctx = element.getContext('2d')
    const type = attrs.type || 'line'
    const data = this.parseJson(attrs.data) || {}
    const options = this.parseJson(attrs.options) || {}

    // // chart.js v2 and newer
    // this.chart = new Chart(ctx, {
    //   type,
    //   data,
    //   options
    // })

    const method = type[0].toUpperCase() + type.slice(1)
    this.chart = new Chart(ctx)[method](data, options)
  }

  private onUpdate (element, attrs) {
    const data = this.parseJson(attrs.data) || {}

    // // chart.js v2.6 and newer
    // this.chart.data = data

    Object.entries(flattenObject(data.datasets || {})).map(([key, value]) =>
      deepSet(this.chart.datasets, key, value)
    )

    this.chart.update()
  }

  private parseJson (value) {
    try {
      return 'object' === typeof value ? value : JSON.parse(value)
    } catch (e) {
      return null
    }
  }
}
