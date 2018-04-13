import { h } from 'hyperapp'

import Chart from 'chart.js'

import { deepSet, flattenObject, parseJson } from '../helpers'

export function ChartComponent (attrs, children) {
  return (state, actions) => (
    <canvas
      {...attrs}
      oncreate={(element) => onCreate(element, attrs)}
      onupdate={(element) => onUpdate(element, attrs)}>
      {children}
    </canvas>
  )
}

function onCreate (element, attrs) {
  const ctx = element.getContext('2d')
  const type = attrs.type || 'line'
  const data = parseJson(attrs.data) || {}
  const options = parseJson(attrs.options) || {}

  // // chart.js v2 and newer
  // element.chart = new Chart(ctx, {
  //   type,
  //   data,
  //   options
  // })

  const method = type[0].toUpperCase() + type.slice(1)
  element.chart = new Chart(ctx)[method](data, options)
}

function onUpdate (element, attrs) {
  const data = parseJson(attrs.data) || {}

  // // chart.js v2.6 and newer
  // element.chart.data = data

  Object.entries(flattenObject(data.datasets || {})).map(([key, value]) =>
    deepSet(element.chart.datasets, key, value)
  )

  element.chart.update()
}
