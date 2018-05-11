import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom' 

class Dialog extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      body: '',
      tags: ''
    }
  }

  handleTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleBody = (e) => {
    this.setState({
      body: e.target.value
    })
  }

  handleTags = (e) => {
    this.setState({
      tags: e.target.value
    })
  }

  hanldeSave = () => {
    this.props.onSave(this.state)
  }

  render () {
    const { onClose } = this.props
    const { title, body, tags } = this.state

    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Create a post</p>
            <button className="delete" aria-label="close" onClick={onClose}></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input className="input" type="text" onChange={this.handleTitle} value={title}/>
              </div>
            </div>
            <div className="field">
              <label className="label">Body</label>
              <div className="control">
                <textarea className="textarea" onChange={this.handleBody} value={body}></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Tags</label>
              <div className="control">
                <input className="input" onChange={this.handleTags} value={tags} type="text" />
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={this.hanldeSave}>Save changes</button>
            <button className="button" type="button" onClick={onClose}>Cancel</button>
          </footer>
        </div>
      </div>
    ) 
  }
}

class Modal extends Component {
  constructor () {
    super()
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