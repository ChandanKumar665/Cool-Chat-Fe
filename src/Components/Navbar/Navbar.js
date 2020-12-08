import React from 'react'
import { session } from '../../session'

const logout = e => {
  e.preventDefault()
  session.destroySession()
}
const Navbar = () => {
  return (
    <div>
      <nav className='navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary'>
        <div className=''>
          <a href='/' className='navbar-brand'>
            Chat Book
          </a>
        </div>
        <div className='container'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='/dashboard'
                style={{ color: 'white' }}
              >
                Dashboard
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
        </div>
      </nav>
    </div>
  )
}

export default Navbar
