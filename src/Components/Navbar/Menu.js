import React from 'react'
import { session } from '../../session'

const Menu = props => {
  const { logout } = props
  let isLoggedIn = session.getSession() || false
  return (
    <>
      {isLoggedIn ? (
        <>
          <ul className='nav'>
            <li className='nav-item'>
              <a className='nav-link' href='/dashboard'>
                Dashboard
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/profile'>
                Profile
              </a>
            </li>
          </ul>
          <div>
            <a href='/contact/create' className='btn btn-light ml-auto'>
              Create
            </a>
            <button className='btn btn-info ml-2' onClick={logout}>
              Logout
            </button>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default Menu
