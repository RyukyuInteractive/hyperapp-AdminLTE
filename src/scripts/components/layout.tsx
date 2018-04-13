import { h } from 'hyperapp'

import { default as $ } from 'jquery'

import 'admin-lte'

import { parseJson } from '../helpers/parse-json'

export function LayoutComponent (attrs, children) {
  return (state, actions) => (
    <div oncreate={(element) => onCreate(element, attrs)} {...attrs}>
      <div class="wrapper">{children}</div>
    </div>
  )
}

function onCreate (element, attrs) {
  applyLibrary(element, attrs)
}

function applyLibrary (element, attrs) {
  $(element).layout(parseJson(attrs.option))
}
