import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom' 

function Dialog ({onClose, onSave}) {
  return (
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button">Cancel</button>
        </footer>
      </div>
    </div>
  )
}

class Modal extends Component {
  constructor () {
    this.modalRoot = document.getElementById('modal-root')
    this.container = document.createElement('div')
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.container);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.container);
  }

  render () {
    return createPortal(<Dialog {...this.props} />, this.container)
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func
}

export default Modal