import React from 'react'
import './style.css'

const Tags = () => {
  return (
    <aside className="menu" styleName="tag-container">
      <p className="menu-label" styleName="tag-title">Tags</p>
      <ul className="menu-list">
          <li styleName="tag"><span className="tag is-primary is-medium">Dashboard</span></li>
          <li styleName="tag"><span className="tag is-link is-medium ">Customers</span></li>
          <li styleName="tag"><span className="tag is-light is-danger is-medium ">Authentication</span></li>
          <li styleName="tag"><span className="tag is-dark is-medium ">Payments</span></li>
          <li styleName="tag"><span className="tag is-success is-medium ">Transfers</span></li>
          <li styleName="tag"><span className="tag is-warning is-medium ">Balance</span></li>
          <li styleName="tag"><span className="tag is-medium ">Question</span></li>
      </ul>
    </aside>
  )
}

export default Tags