import React from 'react'
import Navbar from '../Navbar/Navbar'

const propTypes = {}

const defaultProps = {}

/**
 *
 */
class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      pass: ''
    }
    this.onFieldChange = this.onFieldChange.bind(this)
  }
  onFieldChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  login = e => {
    e.preventDefault()
    const { username, pass } = this.state
    if (username === pass) {
      localStorage.setItem('user', JSON.stringify({ us: username, pass: pass }))
      window.location = '/dashboard'
    }
  }
  render () {
    const { username, pass } = this.state
    return (
      <div>
        <div className='container'>
          <h1>Login here</h1>
          <div className='form-group py-3'>
            <input
              type='text'
              value={username}
              onChange={this.onFieldChange}
              className='form-control'
              name='username'
              placeholder='Username'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              value={pass}
              onChange={this.onFieldChange}
              className='form-control'
              name='pass'
              placeholder='Password'
            />
          </div>
          <div className='form-group'>
            <button
              type='button'
              onClick={this.login}
              className='btn btn-primary'
            >
              Login
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
