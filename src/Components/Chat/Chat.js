import React from 'react'
import socketIOClient from 'socket.io-client'
import config from '../../Config/config'
import { session } from '../../session'
import store from '../../store'
import ChatMsg from './ChatMsg'
import Header from './Header'
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
      id: '',
      typing: ''
    }
  }
  isAuthorizedChat (data) {
    return (
      (data.sender === this.user.id &&
        data.receiver === this.props.contact.userId) ||
      (data.receiver === this.user.id &&
        data.sender === this.props.contact.userId)
    )
  }
  displayChat (data, loadHistory = false) {
    let r = this.state.rec
    if (loadHistory) {
      let up = data && data.filter(item => this.isAuthorizedChat(item))
      this.setState({ rec: up || [] })
    } else if (this.isAuthorizedChat(data)) {
      r.push(data)
      this.setState({ rec: r })
    }
  }
  typing (text) {
    const { contact } = this.props
    this.socket.emit('typing', {
      msg: text ? 'typing...' : '',
      receiver: contact.userId,
      sender: this.user.id,
      socketId: ''
    })
  }
  async componentDidMount () {
    const { user } = session.getSession()
    this.user = user
    const { chatList } = store.getState().ContactReducer
    await this.displayChat(chatList, true)
    this.scrollToBottom()
    this.socket = socketIOClient(config.DOMAIN)

    this.socket.on('connected', data => {
      this.setState({ id: data.id })
    })
    this.socket.on('rec', data => {
      this.displayChat(data)
      this.reset()
      this.scrollToBottom()
    })
    this.socket.on('typing', data => {
      if (this.isAuthorizedChat(data)) {
        this.setState({ typing: data.msg })
      }
    })
    this.send = this.send.bind(this)
    this.typing = this.typing.bind(this)
  }
  componentDidUpdate (prevProps) {
    if (prevProps.contact._id !== this.props.contact._id) {
      console.log('not eq')
      // const { chatList } = store.getState().ChatReducer
      // this.displayChat(chatList, true)
    }
  }
  componentWillUnmount () {}
  reset () {
    this.setState({ msg: '', typing: '' })
  }
  scrollToBottom () {
    const messages = document.getElementById('chat-content')
    messages.scrollTop = messages.scrollHeight
  }
  send () {
    const { msg, id } = this.state
    const { contact } = this.props
    this.socket.emit('send', {
      msg: msg,
      receiver: contact.userId,
      sender: this.user.id,
      socketId: id
    })
    this.reset()
  }
  onFieldChange = e => {
    this.setState({ msg: e.target.value })
    this.typing(e.target.value)
  }
  render () {
    const { msg, rec, typing } = this.state

    return (
      <div className='chat-area'>
        <Header
          name={this.props.contact.name}
          chatingToggle={this.props.chatingToggle}
          typing={typing}
        />

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

export default Chat
