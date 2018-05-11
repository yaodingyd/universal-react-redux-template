import React from 'react'
import { Link } from 'react-router-dom'

function Header ({login, signup}) {
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
                            { signup &&
                            <p className="control">
                                <Link className="button is-small" to="/signup">
                                  <span className="icon">
                                    <i className="fa fa-user-plus"></i>
                                  </span>
                                  <span>Sign up</span>
                                </Link>
                            </p>
                            }
                            { login &&
                            <p className="control">
                              <Link className="button is-small is-info is-outlined" to="/login">
                                <span className="icon">
                                  <i className="fa fa-user"></i>
                                </span>
                                <span>Log in</span>
                              </Link>
                            </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default Header
