import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar'
import ContactList from '../Contacts/ContactList'

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {}

const defaultProps = {}

/**
 *
 */
class Dashboard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div className='container'>
        <Navbar />
        <h2>Dashboard</h2>
        <ContactList />
      </div>
    )
  }
}

Dashboard.propTypes = propTypes
Dashboard.defaultProps = defaultProps
// #endregion

export default Dashboard
