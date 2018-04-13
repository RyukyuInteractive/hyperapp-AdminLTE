import { h } from 'hyperapp'

import { default as $ } from 'jquery'

import 'jquery-sparkline'

import { parseJson } from '../helpers/parse-json'

export function SparklinesComponent (attrs, children) {
  return (state, actions) => (
    <div {...attrs} oncreate={(element) => onCreate(element, attrs)}>
      {children}
    </div>
  )
}

function onCreate (element, attrs) {
  applyLibrary(element, attrs)
}

function applyLibrary (element, attrs) {
  const data = parseJson(attrs.data) || 'html'
  const options = parseJson(attrs.options) || {}
  const type = attrs.type || 'bar'

  $(element).sparkline(data, {
    type,
    ...options
  })
}
