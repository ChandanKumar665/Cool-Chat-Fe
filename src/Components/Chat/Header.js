import React from 'react'
import Avatar from 'react-avatar'
import { ArrowLeftOutlined } from '@ant-design/icons'

const Header = ({ name, chatingToggle, typing }) => {
  return (
    <div className='bg-primary chat-head'>
      <ArrowLeftOutlined
        style={{ fontSize: '16px', paddingRight: '4px' }}
        onClick={chatingToggle}
      />
      <Avatar name={name} size='32' round={true} />
      <label className='typing'>{typing}</label>
    </div>
  )
}

export default Header
