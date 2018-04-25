import { h } from 'hyperapp'

import { default as $ } from 'jquery'

import 'bootstrap'

export function ModalComponent (attrs, children) {
  return (state, actions) => (
    <div
      role="dialog"
      tabindex="-1"
      {...filterEvents(attrs)}
      class={attrs.class + ' modal fade'}
      oncreate={(element) => onCreate(element, attrs)}
      onremove={(element, done) => onRemove(element, done, attrs)}>
      {children}
    </div>
  )
}

const eventsMap = {
  onhidden: 'hidden.bs.modal',
  onhide: 'hide.bs.modal',
  onloaded: 'loaded.bs.modal',
  onshow: 'show.bs.modal',
  onshown: 'shown.bs.modal'
}

function onCreate (element, attrs) {
  const $element = $(element)
  $element.modal()

  Object.entries(attrs).map(([key, value]) => {
    if (eventsMap[key]) {
      $element.on(eventsMap[key], value)
    }
  })

  if (attrs.oncreate) {
    attrs.oncreate(element)
  }
}

function onRemove (element, done, attrs) {
  const $element = $(element)
  $element.one('hidden.bs.modal', done)
  $element.modal('hide')

  if (attrs.onremove) {
    attrs.onremove(element, done)
  }
}

function filterEvents (attrs) {
  return Object.entries(attrs).reduce((acc, [key, value]) => {
    if (!(key in eventsMap)) {
      acc[key] = value
    }
    return acc
  }, {})
}
