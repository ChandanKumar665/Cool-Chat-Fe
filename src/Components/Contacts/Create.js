import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useDispatch, useReducer } from 'react-redux'
import { ContactAction } from './ContactAction'
import { session } from '../../session'

const Create = ({ props }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const onFieldChange = e => {
    const { name, value } = e.target
    name === 'name'
      ? setName(value)
      : name === 'email'
      ? setEmail(value)
      : setPhone(value)
  }
  const createContact = e => {
    e.preventDefault()
    //1.create a contact action
    //2.create dispatch func
    const { user } = session.getSession()
    let data = { name, email, phone, createdBy: user.id }
    // console.log(data)
    ContactAction.addContact(data)
  }
  const fields = [
    {
      name: 'name',
      value: name,
      type: 'text',
      placeholder: 'Name'
    },
    { name: 'email', value: email, type: 'text', placeholder: 'Email' },
    { name: 'phone', value: phone, type: 'text', placeholder: 'Phone' }
  ]
  return (
    <div>
      <Navbar />
      <div className='card border-0 shadow'>
        <div className='card-header'>Add a contact</div>
        <div className='card-body'>
          <form onSubmit={createContact}>
            {fields.map((field, i) => (
              <div className='form-group' key={i}>
                <input
                  type={field.type}
                  value={field.value}
                  onChange={e => onFieldChange(e)}
                  className='form-control'
                  name={field.name}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div className='form-group'>
              <button type='submit' className='btn btn-primary'>
                Add contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
