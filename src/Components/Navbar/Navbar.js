import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary'>
        <div className=''>
          <a href='#' className='navbar-brand'>
            Contact Book
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
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
