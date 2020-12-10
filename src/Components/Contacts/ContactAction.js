import { ContactService } from '../../Services/Contact/ContactService'
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
export const ContactAction = { addContact, deleteContact, updateContact }
