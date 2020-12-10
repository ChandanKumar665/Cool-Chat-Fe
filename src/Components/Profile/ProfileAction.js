import { UserService } from '../../Services/User/UserService'
import { ProfileConstant } from './ProfileConst'

const getUserDetails = userId => async dispatch => {
  UserService.getUserDetails(userId)
    .then(res => {
      const { data } = res
      if (res.status) {
        dispatch({
          type: ProfileConstant.GET_USER_SUCCESS,
          payload: data.data
        })
      }
    })
    .catch(err => {
      dispatch({
        type: ProfileConstant.GET_USER_ERROR,
        payload: err.message || 'Error'
      })
    })
}

export const ProfileAction = { getUserDetails }
