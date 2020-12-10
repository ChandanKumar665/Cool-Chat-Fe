import { ProfileConstant } from './ProfileConst'

//reducer will connect to the store
const reducer = (state = '', action) => {
  const { type, payload } = action
  //define all the cases here
  switch (type) {
    case ProfileConstant.GET_USER_SUCCESS:
      return { ...state, user: payload }
    case ProfileConstant.GET_USER_ERROR:
      return { ...state, user: null }
    default:
      return state
  }
}

export const ProfileReducer = { reducer }
