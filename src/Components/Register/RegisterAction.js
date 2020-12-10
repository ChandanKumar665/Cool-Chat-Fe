import { UserService } from '../../Services/User/UserService'
import util from '../../Util/Util'

const register = data => {
  UserService.register(data)
    .then(res => {
      if (res.response) {
        throw Error(res.response.data.message)
      }
      const { data } = res
      if (data.status) {
        util.showAlertMsg(data.message, true, '/login')
      }
    })
    .catch(err => util.showAlertMsg(`${err}`, false))
}

export const RegisterAction = { register }
