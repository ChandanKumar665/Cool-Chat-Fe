import React from 'react'
import { connect } from 'react-redux'
import { session } from '../../session'
import ContactList from '../Contacts/ContactList'
import Navbar from '../Navbar/Navbar'
import { DashboardAction } from './DashboardAction'
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
      <div className='container-fluid'>
        <Navbar />
        <h2>Contacts</h2>
        <p className='mt-2'></p>
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
  getContactList: DashboardAction.getContactList,
  getUserDetails: DashboardAction.getUserDetails
}
export default connect(mapStateToProps, actionCreator)(Dashboard)
