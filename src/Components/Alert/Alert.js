import React from 'react'

const Alert = ({ type, msg }) => {
  return (
    <div>
      <div className={`alert alert-${type}`}>{msg}</div>
    </div>
  )
}

export default Alert
