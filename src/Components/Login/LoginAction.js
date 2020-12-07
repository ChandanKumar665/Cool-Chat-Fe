//make action functions here
//every LoginAction function will return a function with args dispatch
//after that the flow will go to its reducer(LoginReducer)
import { UserService } from '../../Services/User/UserService'
import { LoginConstant } from './LoginConstant'
import { session } from '../../session'

const login = (email, password) => dispatch => {
  //pass the data to the service controller

  UserService.login(email, password)
    .then(res => {
      if (res.response) {
        throw Error(res.response.data.message)
      }
      const { data } = res
      if (data.status) {
        dispatch({
          type: LoginConstant.LOGIN_SUCCESS,
          payload: data.data
        })
        session.createSession({ user: { id: data.data.id } })
      } else {
        dispatch({
          type: LoginConstant.LOGIN_FAILURE,
          payload: null
        })
      }
    })
    .catch(err => {
      dispatch({
        type: LoginConstant.LOGIN_FAILURE,
        payload: err
      })
    })
}

export const LoginAction = { login }
