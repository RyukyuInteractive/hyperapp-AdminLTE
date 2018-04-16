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
  applyLibrary(element, attrs)
}

function onUpdate (element, attrs) {
  updateLibrary(element, attrs)
}

function applyLibrary (element, attrs) {
  const data = parseJson(attrs.data)
  $(element).vectorMap(data)
}

function updateLibrary (element, attrs) {
  const data = parseJson(attrs.data)
  Object.entries(data).map(([key, value]) => {
    $(element).vectorMap('set', key, value)
  })
}
