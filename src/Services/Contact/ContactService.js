//contians all the contact related services
import config from '../../Config/config'

const createContact = data => {
  const payload = {
    name: data.name,
    email: data.name,
    phone: data.phone,
    createdBy: data.createdBy
  }
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }
  const uri = `${config.DOMAIN}${config.CONTACT_API_URI}`

  return fetch(uri, requestOptions)
    .then(handleResponse)
    .then(res => res)
}

export const contactService = {
  createContact
}
