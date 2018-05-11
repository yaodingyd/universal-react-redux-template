import React from 'react'
import './style.css'

const Nav = ({handleLogout, username}) => {
  return (
    <nav className="navbar is-light" styleName="nav">
      <div className="container">
          <div className="navbar-menu">
              <div className="navbar-start">
                  <a className="navbar-item is-active" href="#">Popular</a>
                  <a className="navbar-item" href="#">Recent</a>
                  <a className="navbar-item" href="#">Rising</a>
                  <div className="navbar-item">
                      <input className="input" type="text" placeholder="Search forum..." />
                  </div>
              </div>
              <div className="navbar-end">
                  <div className="navbar-item">{username}</div>
                  <div className="navbar-item">
                    <button className="button is-small" type="button" onClick={handleLogout}>
                        <span className="icon">
                        <i className="fa fa-user-plus"></i>
                        </span>
                        <span>Log out</span>
                    </button>
                  </div>
              </div>
          </div>
      </div>
  </nav>
  )
}

export default Nav