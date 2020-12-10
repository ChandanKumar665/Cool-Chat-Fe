import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import { ContactAction } from './ContactAction'

class Update extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: (props.location.state && props.location.state.contact.name) || '',
      email: (props.location.state && props.location.state.contact.email) || '',
      phone: (props.location.state && props.location.state.contact.phone) || '',
      contactId:
        (props.location.state && props.location.state.contact._id) || '',
      addedBy:
        (props.location.state && props.location.state.contact.addedBy) || ''
    }
  }
  onFieldChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  updateContact = e => {
    e.preventDefault()
    const { name, email, contactId, addedBy } = this.state
    ContactAction.updateContact({ name, email, contactId, addedBy })
  }
  render () {
    const { name, email, phone } = this.state
    return (
      <div>
        <Navbar />
        <form onSubmit={this.updateContact}>
          <div className='form-group'>
            <label>Name:</label>
            <input
              type='text'
              value={name}
              onChange={this.onFieldChange}
              className='form-control'
              name='name'
            />
          </div>
          <div className='form-group'>
            <label>Name:</label>
            <input
              type='text'
              value={email}
              onChange={this.onFieldChange}
              className='form-control'
              name='email'
            />
          </div>
          <div className='form-group'>
            <label>Name:</label>
            <input
              type='text'
              value={phone}
              disabled
              className='form-control'
              name='phone'
            />
          </div>
          <button className='btn btn-info'>Update</button>
        </form>
      </div>
    )
  }
}

export default Update
