const addContact = data => {
  console.log('here', data)
  return {
    type: 'CREATE_CONTACT',
    payload: data
  }
}

export const ContactAction = { addContact }
