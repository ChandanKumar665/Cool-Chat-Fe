import React from 'react'
import { connect } from 'react-redux'
import { session } from '../../session'
import ContactList from '../Contacts/ContactList'
import Footer from '../Footer/Footer'
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
    // this.props.getChatList(user.id)
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3'></div>
          <div className='col-sm-6'>
            <ContactList />
            <Footer />
          </div>
          <div className='col-sm-3'></div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = propTypes
Dashboard.defaultProps = defaultProps

//map props
const mapStateToProps = state => ({
  contactList: state.contactList,
  chatList: state.chatList,
  user: state.LoginReducer.user
})
const actionCreator = {
  getContactList: DashboardAction.getContactList,
  getUserDetails: DashboardAction.getUserDetails,
  getChatList: DashboardAction.getChatList
}
export default connect(mapStateToProps, actionCreator)(Dashboard)
