//contians all the contact related services
import config from '../../Config/config'
import axios from 'axios'

const login = async (email, password) => {
  const payload = {
    email: email,
    pass: password
  }
  const requestOptions = {
    header: { 'Content-Type': 'application/json' }
  }
  const uri = `${config.DOMAIN}${config.USER_ENDPOINT}/auth`
  try {
    return await axios.post(uri, payload, requestOptions)
  } catch (error) {
    return error
  }
}

const register = async data => {
  const payload = {
    email: data.email,
    pass: data.pass,
    name: data.name,
    phone: data.phone,
    age: data.age
  }
  const requestOptions = {
    header: { 'Content-Type': 'application/json' }
  }
  const uri = `${config.DOMAIN}${config.USER_ENDPOINT}/register`
  try {
    return await axios.post(uri, payload, requestOptions)
  } catch (error) {
    return error
  }
}

const getUserDetails = async id => {
  const requestOptions = {
    header: { 'Content-Type': 'application/json' }
  }
  const uri = `${config.DOMAIN}${config.USER_ENDPOINT}/${id}`
  try {
    return await axios.get(uri, requestOptions)
  } catch (error) {
    return error
  }
}

export const UserService = {
  login,
  register,
  getUserDetails
}
