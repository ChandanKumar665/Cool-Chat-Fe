import React, { useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import Alert from '../Alert/Alert'
import Chat from '../Chat/Chat'
import Navbar from '../Navbar/Navbar'
import Contact from './Contact'
import { ContactAction } from './ContactAction'
import { session } from '../../session'

const CustomChekbox = () => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' />
    <label className='custom-control-label'></label>
  </div>
)
const header = ['Name', 'Phone', 'Actions']

const ContactList = props => {
  let contacts = useSelector(state => state.DashboardReducer.contactList)
  const { user } = session.getSession()
  const [isChating, setisChatting] = useState(false)
  const [contactObj, setcontactObj] = useState('')
  const chatingToggle = obj => {
    setisChatting(!isChating)
    setcontactObj(obj)
  }

  useEffect(() => {
    props.getChatList(user.id)
    return () => {}
  }, [isChating])
  return (
    <>
      {!isChating && (
        <div className='contactList'>
          <Navbar />
          <div className='mt-2'></div>
          <h3>Contacts</h3>
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
      )}

      {isChating && (
        <div>
          <h3>Chat</h3>
          <Chat contact={contactObj} chatingToggle={chatingToggle} />
        </div>
      )}
    </>
  )
}
const mapStateToProps = state => ({
  chatList: state.chatList,
  isLoaded: state.isLoaded
})
const actionCreator = {
  getChatList: ContactAction.getChatList
}
export default connect(mapStateToProps, actionCreator)(ContactList)
