import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from 'react-avatar'

const Profile = () => {
  let user = useSelector(state => state.ProfileReducer.user)
  const obj = {
    Name: user && user.name,
    Email: user && user.email,
    Phone: user && user.phone
  }
  return (
    <div className='card border-0 shadow' style={{ width: '18rem' }}>
      <div className='card-header' style={{ textAlign: 'center' }}>
        <Avatar className='mr-2' name={user && user.name} round={true} />
      </div>
      <div className='card-body'>
        <div className='form-group'>
          {Object.keys(obj).map((item, i) => (
            <p className='form-contorl' key={i}>
              {item}: {obj && obj[item]}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
