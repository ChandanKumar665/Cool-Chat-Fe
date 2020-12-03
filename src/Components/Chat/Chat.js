import React from 'react'
import PropTypes from 'prop-types'

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

    this.state = {}
  }

  render () {
    return (
      <div>
        Chat Room
        <div className='chat-box'>
          <div className='chat-content'>Display area</div>
          <div className='space'></div>
          <div className='msg-box-div'>
            <div className='form-group'>
              <textarea className='form-control' rows='1' id='msg'></textarea>
            </div>
            <div className='form-group send-btn'>
              <button type='button' className='btn btn-primary'>
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
