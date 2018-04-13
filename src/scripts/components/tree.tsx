import { h } from 'hyperapp'

import { default as $ } from 'jquery'

import 'admin-lte'

import { parseJson } from '../helpers/parse-json'

export function TreeComponent (attrs, children) {
  return (state, actions) => (
    <ul oncreate={(element) => onCreate(element, attrs)} {...attrs}>
      {children}
    </ul>
  )
}

function onCreate (element, attrs) {
  applyLibrary(element, attrs)
}

function applyLibrary (element, attrs) {
  $(element).tree(parseJson(attrs.option))
}
