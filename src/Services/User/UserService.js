//contians all the contact related services
import config from '../../Config/config'
import axios from 'axios'

const login = async (email, password) => {
  const payload = {
    email: email,
    pass: password
  }
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' }
  }
  const uri = `${config.DOMAIN}${config.USER_LOGIN}`
  try {
    return await axios.post(uri, payload, requestOptions)
  } catch (error) {
    return error
  }
}

export const UserService = {
  login
}
