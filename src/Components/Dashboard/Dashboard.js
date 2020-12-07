import React from 'react'
import { connect, useSelector } from 'react-redux'
import ContactList from '../Contacts/ContactList'
import Navbar from '../Navbar/Navbar'
import { DashboardAction } from './DashboardAction'
import { session } from '../../session'
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
  componentDidMount () {
    const { user } = session.getSession()
    this.props.getContactList(user.id)
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

//map props
const mapStateToProps = state => ({
  contactList: state.contactList,
  user: state.LoginReducer.user
})
const actionCreator = {
  getContactList: DashboardAction.getContactList
}
export default connect(mapStateToProps, actionCreator)(Dashboard)
