import { LoginConstant } from './LoginConstant'

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null
}

//reducer will connect to the store
const reducer = (state = initialState, action) => {
  const { type, payload } = action
  //define all the cases here
  switch (type) {
    case LoginConstant.LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, user: payload._id }
    case LoginConstant.LOGIN_FAILURE:
      return { ...state, isLoggedIn: false, error: payload }
    default:
      return state
  }
}

export const LoginReducer = { reducer }
