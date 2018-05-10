import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <nav className="navbar is-light is-fixed-top">
        <div className="container">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">Home</Link>
                <div className="navbar-burger burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/main">Forum</Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <a className="button is-small">
                                  <span className="icon">
                                    <i className="fa fa-user-plus"></i>
                                  </span>
                                  <span>Register</span>
                                </a>
                            </p>
                            <p className="control">
                              <a className="button is-small is-info is-outlined">
                                <span className="icon">
                                  <i className="fa fa-user"></i>
                                </span>
                                <span>Login</span>
                              </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default Header
