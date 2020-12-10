import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import { LoginAction } from './LoginAction'

const propTypes = {}

const defaultProps = {}

/**
 *
 */
class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
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
    const { email, pass } = this.state
    this.props.login(email, pass)
  }
  render () {
    const { email, pass } = this.state
    return (
      <div>
        <Navbar />
        <div className='container'>
          <h1>Login here</h1>
          <div className='form-group py-3'>
            <input
              type='text'
              value={email}
              onChange={this.onFieldChange}
              className='form-control'
              name='email'
              placeholder='Email'
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
          <div className='form-group'>
            <a href='/register' className=''>
              Register
            </a>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({ isLoggedIn: state.isLoggedIn })
const actionCreator = {
  login: LoginAction.login
}
//we need to connect Login component with LoginAction
export default connect(mapStateToProps, actionCreator)(Login)
