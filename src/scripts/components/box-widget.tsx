import { h } from 'hyperapp'

import { default as $ } from 'jquery'

import 'admin-lte'

import { parseJson } from '../helpers/parse-json'

export function BoxWidgetComponent (attrs, children) {
  if (null == attrs.class) {
    attrs.class = ''
  }
  attrs.class += ' box'
  return (state, actions) => (
    <div oncreate={(element) => onCreate(element, attrs)} {...attrs}>
      {children}
    </div>
  )
}

function onCreate (element, attrs) {
  applyLibrary(element, attrs)
}

function applyLibrary (element, attrs) {
  $(element).boxWidget(parseJson(attrs.option))
}
