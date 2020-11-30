import React from 'react'

const propTypes = {}

const defaultProps = {}

/**
 *
 */
class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      inputs: this.props.inputs
    }
  }

  render () {
    return (
      <div>
        <h1>Login here</h1>
      </div>
    )
  }
}

export default Login
