//contians all the contact related services
import config from '../../Config/config'
import axios from 'axios'

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
}

const getContactList = async userId => {
  const requestOptions = {
    header: { 'Content-Type': 'application/json' }
  }
  const uri = `${config.DOMAIN}${config.CONTACT_ENDPOINT}/${userId}`
  try {
    return await axios.get(uri, requestOptions)
  } catch (error) {
    return error
  }
}

export const ContactService = {
  createContact,
  getContactList
}
