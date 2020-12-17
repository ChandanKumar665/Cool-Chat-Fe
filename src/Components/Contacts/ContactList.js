import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import Alert from '../Alert/Alert'
import Chat from '../Chat/Chat'
import Contact from './Contact'
import { ContactAction } from './ContactAction'

const CustomChekbox = () => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' />
    <label className='custom-control-label'></label>
  </div>
)
const header = ['', 'Name', 'Email', 'Phone', 'Actions']

const ContactList = props => {
  let contacts = useSelector(state => state.DashboardReducer.contactList)
  const [isChating, setisChatting] = useState(false)
  const [contactObj, setcontactObj] = useState('')
  const chatingToggle = obj => {
    setisChatting(true)
    setcontactObj(obj)
  }
  return (
    <div className='contactList'>
      <div style={{ width: isChating ? '50%' : '100%' }}>
        <table className='table'>
          <thead>
            <tr>
              {header.map((head, i) => (
                <th scope='col' key={i}>
                  {head || <CustomChekbox />}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {contacts &&
              contacts.map((contact, i) => (
                <Contact
                  contact={contact}
                  key={i}
                  chatingToggle={chatingToggle}
                />
              ))}
          </tbody>
        </table>
        {!(contacts && contacts.length) && (
          <Alert type='nodata' msg='No contacts' />
        )}
      </div>
      {isChating && (
        <div style={{ width: '50%' }}>
          <Chat contact={contactObj} />
        </div>
      )}
    </div>
  )
}
const mapStateToProps = state => ({
  isOpen: state.isOpen,
  modalData: state.modalData
})
const actionCreator = {
  toggleModal: ContactAction.toggleModal
}
export default connect(mapStateToProps, actionCreator)(ContactList)
