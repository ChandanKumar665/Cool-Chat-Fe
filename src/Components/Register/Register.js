import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { RegisterAction } from './RegisterAction'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [pass, setPass] = useState('')
  const [age, setAge] = useState('')

  const register = e => {
    e.preventDefault()

    let data = { name, email, phone, pass, age }
    RegisterAction.register(data)
  }
  const onFieldChange = e => {
    const { name, value } = e.target
    let obj = fields.find(item => item.name === name)
    if (obj) {
      obj.handler(value)
    }
  }
  const fields = [
    {
      name: 'name',
      value: name,
      type: 'text',
      placeholder: 'Name',
      handler: function (val) {
        setName(val)
      }
    },
    {
      name: 'email',
      value: email,
      type: 'text',
      placeholder: 'Email',
      handler: function (val) {
        setEmail(val)
      }
    },
    {
      name: 'phone',
      value: phone,
      type: 'text',
      placeholder: 'Phone',
      handler: function (val) {
        setPhone(val)
      }
    },
    {
      name: 'pass',
      value: pass,
      type: 'password',
      placeholder: 'Password',
      handler: function (val) {
        setPass(val)
      }
    },
    {
      name: 'age',
      value: age,
      type: 'number',
      placeholder: 'Age',
      handler: function (val) {
        setAge(val)
      }
    }
  ]
  return (
    <div>
      <Navbar />
      <div className='card border-0 shadow'>
        <div className='card-header'>Register here</div>
        <div className='card-body'>
          <form onSubmit={register}>
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
                Register
              </button>
            </div>
          </form>
          <div className='form-group'>
            <a href='/login' className=''>
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
