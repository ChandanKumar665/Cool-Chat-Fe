import React from 'react'
import Avatar from 'react-avatar'

const CustomChekbox = () => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' />
    <label className='custom-control-label'></label>
  </div>
)
const Contact = ({ contact }) => {
  const con = {
    id: '',
    name: contact.name,
    email: contact.email,
    phone: contact.phone
  }
  return (
    <tr>
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
  )
}

export default Contact
