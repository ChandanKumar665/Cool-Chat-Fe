import React from 'react'
import { useSelector } from 'react-redux'
import Contact from './Contact'

const CustomChekbox = () => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' />
    <label className='custom-control-label'></label>
  </div>
)
const header = ['', 'Name', 'Email', 'Phone', 'Actions']

const ContactList = props => {
  const contacts = useSelector(state => state.contacts)

  return (
    <div>
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
          {contacts.map((contact, i) => (
            <Contact contact={contact} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContactList
