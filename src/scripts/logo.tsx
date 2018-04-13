import { h } from 'hyperapp'

import { Link } from '@hyperapp/router'

export function Logo (attrs, children) {
  return (state, actions) => (
    <Link to="/" class="logo">
      <span class="logo-mini">
        <b>A</b>LT
      </span>
      <span class="logo-lg">
        <b>Admin</b>LTE
      </span>
    </Link>
  )
}
