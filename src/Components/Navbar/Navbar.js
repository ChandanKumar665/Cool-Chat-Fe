import React from 'react'
import { session } from '../../session'
import Menu from './Menu'

const logout = e => {
  e.preventDefault()
  session.destroySession()
}
const Navbar = () => {
  return (
    <div>
      <nav className='navbar shadow navbar-expand-sm navbar-dark bg-primary'>
        <a href='/' className='brand'>
          Chat Book
        </a>

        <div className='container'>
          <Menu logout={logout} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
