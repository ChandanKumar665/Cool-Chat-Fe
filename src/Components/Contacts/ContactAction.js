import { ContactService } from '../../Services/Contact/ContactService'
import { UserService } from '../../Services/User/UserService'
import { ContactConstant } from './ContactConst'
import util from '../../Util/Util'

const addContact = data => {
  ContactService.createContact(data)
    .then(res => {
      if (res.response) {
        throw Error(res.response.data.message)
      }
      const { data } = res
      if (data.status) {
        util.showAlertMsg(data.message, true, '/dashboard')
      }
    })
    .catch(err => util.showAlertMsg(`${err}`, false))
}
const deleteContact = data => {
  ContactService.deleteContact(data)
    .then(res => {
      if (res.response) {
        throw Error(res.response.data.message)
      }
      const { data } = res
      if (data.status) {
        util.showAlertMsg(data.message, true, '/dashboard')
      }
    })
    .catch(err => util.showAlertMsg(`${err}`, false))
}
const updateContact = data => {
  ContactService.updateContact(data)
    .then(res => {
      if (res.response) {
        throw Error(res.response.data.message)
      }
      const { data } = res
      if (data.status) {
        util.showAlertMsg(data.message, true, '/dashboard')
      }
    })
    .catch(err => util.showAlertMsg(`${err}`, false))
}
const getChatList = id => async dispatch => {
  UserService.getUserChatList(id)
    .then(res => {
      if (res.response) {
        throw Error(res.response.data.message)
      }
      const { data } = res
      if (data.status) {
        dispatch({
          type: ContactConstant.CHAT_LIST_SUCCESS,
          payload: data.data
        })
      }
    })
    .catch(err =>
      dispatch({
        type: ContactConstant.CHAT_LIST_ERROR,
        payload: []
      })
    )
}
export const ContactAction = {
  addContact,
  deleteContact,
  updateContact,
  getChatList
}
