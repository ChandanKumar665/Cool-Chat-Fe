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
            <li className='nav-item'>
              <a className='nav-link' href='/contact/create'>
                Create
              </a>
            </li>
            <li className='nav-item'>
              <button className='btn btn-info' onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default Menu
