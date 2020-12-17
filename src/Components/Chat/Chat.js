import React from 'react'
import PropTypes from 'prop-types'
import socketIOClient from 'socket.io-client'
import ChatMsg from './ChatMsg'
import { session } from '../../session'
const ENDPOINT = 'http://localhost:4000'
const { user } = session.getSession()

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {}

const defaultProps = {}

/**
 *
 */
class Chat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      msg: '',
      rec: [],
      id: ''
    }
  }
  componentDidMount () {
    this.socket = socketIOClient(ENDPOINT)
    this.socket.on('connected', data => {
      this.setState({ id: data.id })
    })
    this.socket.on('rec', data => {
      let r = this.state.rec
      if (
        data.sender === user.id ||
        (data.receiver === user.id && data.sender === this.props.contact.userId)
      ) {
        r.push(data)
        this.setState({ rec: r })
      }
    })
    this.send = this.send.bind(this)
  }
  componentDidUpdate (prevProps) {
    if (prevProps.contact._id !== this.props.contact._id) {
      this.setState({ rec: [] })
    }
  }
  send () {
    const { msg, id } = this.state
    const { contact } = this.props
    this.socket.emit('send', {
      msg: msg,
      receiver: contact.userId,
      sender: user.id,
      socketId: id
    })
    this.setState({ msg: '' })
  }
  onFieldChange = e => {
    this.setState({ msg: e.target.value })
  }
  render () {
    const { msg, rec } = this.state
    return (
      <div className='chat-area'>
        <div className='pl-2'>
          <h4>{this.props.contact.name}</h4>
        </div>

        <div className='chat-box'>
          <div className='chat-content' id='chat-content'>
            <ChatMsg msg={rec} contact={this.props.contact} />
          </div>
          <div className='space'></div>
          <div className='msg-box-div'>
            <div
              className='form-group'
              style={{ width: '-webkit-fill-available' }}
            >
              <input
                className='form-control'
                id='msg'
                name='msg'
                value={msg}
                onChange={this.onFieldChange}
              />
            </div>
            <div className='form-group send-btn'>
              <button
                type='button'
                className='btn btn-primary'
                onClick={this.send}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Chat.propTypes = propTypes
Chat.defaultProps = defaultProps
// #endregion

export default Chat
