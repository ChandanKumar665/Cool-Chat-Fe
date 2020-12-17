import React from 'react'

const ChatMsg = ({ msg, contact }) => {
  return (
    <>
      {msg &&
        msg.map((item, i) => (
          <div
            className='chat-msg'
            key={i}
            style={{ textAlign: item.sender !== contact.userId ? 'right' : '' }}
          >
            <h6>
              <span
                className={`badge badge-${
                  item.sender !== contact.userId ? 'msg' : 'secondary'
                }`}
              >
                {item.msg}
              </span>
            </h6>
          </div>
        ))}
    </>
  )
}

export default ChatMsg
