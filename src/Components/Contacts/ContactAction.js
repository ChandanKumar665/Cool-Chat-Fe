import { ContactService } from '../../Services/Contact/ContactService'

const showAlertMsg = (
  msg = 'Success',
  isRedirect = true,
  path = '/dashboard'
) => {
  window.alert(msg)
  if (isRedirect) {
    window.location = path
  }
}
const addContact = data => {
  ContactService.createContact(data)
    .then(res => {
      if (res.response) {
        throw Error(res.response.data.message)
      }
      const { data } = res
      if (data.status) {
        showAlertMsg(data.message)
      }
    })
    .catch(err => showAlertMsg(`${err}`, false))
}

export const ContactAction = { addContact }
