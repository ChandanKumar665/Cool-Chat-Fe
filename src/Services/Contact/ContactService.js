//contians all the contact related services
import config from '../../Config/config'
import axios from 'axios'

const createContact = async data => {
  const payload = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    createdBy: data.createdBy
  }
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' }
  }
  const uri = `${config.DOMAIN}${config.CONTACT_ENDPOINT}`
  try {
    return await axios.post(uri, payload, requestOptions)
  } catch (error) {
    return error
  }
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

const deleteContact = async data => {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' },
    data: {
      addedBy: data.userId,
      id: data.contactId
    }
  }
  const uri = `${config.DOMAIN}${config.CONTACT_ENDPOINT}`
  try {
    return await axios.delete(uri, requestOptions)
  } catch (error) {
    return error
  }
}
const updateContact = async data => {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' }
  }

  const uri = `${config.DOMAIN}${config.CONTACT_ENDPOINT}`
  try {
    return await axios.put(uri, data, requestOptions)
  } catch (error) {
    return error
  }
}

export const ContactService = {
  createContact,
  getContactList,
  deleteContact,
  updateContact
}
