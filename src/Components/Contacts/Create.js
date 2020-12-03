import React from 'react'
import Navbar from '../Navbar/Navbar'

const Create = () => {
  const onFieldChange = e => {
    console.log(e.target.value)
  }
  const fields = [
    {
      name: 'name',
      value: '',
      type: 'text',
      placeholder: 'Name',
      onChange: onFieldChange
    },
    { name: 'email', value: '', type: 'text', placeholder: 'Email' },
    { name: 'phone', value: '', type: 'text', placeholder: 'Phone' }
  ]
  return (
    <div>
      <Navbar />
      <div className='card border-0 shadow'>
        <div className='card-header'>Add a contact</div>
        <div className='card-body'>
          <form>
            {fields.map((field, i) => (
              <div className='form-group' key={i}>
                <input
                  type={field.type}
                  // value={username}
                  onChange={field.onChange}
                  className='form-control'
                  name={field.name}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div className='form-group'>
              <button
                type='button'
                // onClick={this.login}
                className='btn btn-primary'
              >
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
