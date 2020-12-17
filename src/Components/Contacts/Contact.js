import { Popconfirm } from 'antd'
import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'
import { session } from '../../session'
import { ContactAction } from './ContactAction'

const CustomChekbox = () => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' />
    <label className='custom-control-label'></label>
  </div>
)

const Contact = ({ contact, chatingToggle }) => {
  const deleteContact = id => {
    const { user } = session.getSession()
    ContactAction.deleteContact({ userId: user.id, contactId: id })
  }

  const Actions = () => (
    <div className='actions'>
      <Link
        to={{
          pathname: `/contact/update`,
          state: {
            contact
          }
        }}
      >
        Edit
      </Link>
      &nbsp;|&nbsp;
      <Popconfirm
        title={`Are you sure to delete ${contact.name} ?`}
        onConfirm={e => deleteContact(contact._id)}
        okText='Yes'
        cancelText='No'
      >
        <a href='#'>Delete</a>
      </Popconfirm>
    </div>
  )
  const con = {
    id: '',
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    actions: <Actions />
  }
  return (
    <>
      <tr onClick={e => chatingToggle(contact)}>
        {Object.keys(con).map((key, i) =>
          key === 'name' ? (
            <td key={i}>
              <Avatar className='mr-2' name={con[key]} size='45' round={true} />
              {con[key]}
            </td>
          ) : (
            <td key={i}>{con[key] || <CustomChekbox />}</td>
          )
        )}
      </tr>
    </>
  )
}

export default Contact
