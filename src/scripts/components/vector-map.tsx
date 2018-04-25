import { h } from 'hyperapp'

import { default as $ } from 'jquery'

import 'jvectormap'

import { parseJson } from '../helpers/parse-json'

export function VectorMapComponent (attrs, children) {
  return (state, actions) => (
    <div
      {...attrs}
      oncreate={(element) => onCreate(element, attrs)}
      onupdate={(element) => onUpdate(element, attrs)}
    />
  )
}

function onCreate (element, attrs) {
  const $element = $(element)
  const data = parseJson(attrs.data)
  $element.vectorMap(data)
}

const settables = {
  backgroundColor: 1,
  focus: 1
}

function onUpdate (element, attrs) {
  const $element = $(element)
  const data = parseJson(attrs.data)
  Object.entries(data).map(([key, value]) => {
    if (settables[key]) {
      $element.vectorMap('set', key, value)
    }
  })
}
