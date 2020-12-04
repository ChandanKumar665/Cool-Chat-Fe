//make action functions here
//every LoginAction function will return a function with args dispatch
//after that the flow will go to its reducer(LoginReducer)
import { UserService } from '../../Services/User/UserService'
import { LoginConstant } from './LoginConstant'

const login = (email, password) => {
  console.log('here', email, password)
  //pass the data to the service controller
  return dispatch => {
    UserService.login(email, password)
      .then(res => {
        dispatch({
          type: LoginConstant.LOGIN_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: LoginConstant.LOGIN_FAILURE,
          payload: err
        })
      })
  }
}

export const LoginAction = { login }
