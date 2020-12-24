import React, { Component } from 'react'
import { session } from '../../session'
import Profile from './Profile'
import { ProfileAction } from './ProfileAction'
import { connect } from 'react-redux'
import Navbar from '../Navbar/Navbar'
class Index extends Component {
  componentDidMount () {
    const { user } = session.getSession()
    this.props.getUserDetails(user.id)
  }
  render () {
    return (
      <div className='container'>
        <Navbar />
        <div className='mt-2'></div>
        <h3>Profile</h3>
        <div className='mt-2'></div>
        <hr />
        <Profile />
      </div>
    )
  }
}
//map props
const mapStateToProps = state => ({
  userDetails: state.userDetails
})
const actionCreator = {
  getUserDetails: ProfileAction.getUserDetails
}
export default connect(mapStateToProps, actionCreator)(Index)
