import { DashboardConstant } from './DashboardConstant'
import { DashboardAction } from './DashboardAction'
//reducer will connect to the store
const reducer = (state = '', action) => {
  const { type, payload } = action
  //define all the cases here
  switch (type) {
    case DashboardConstant.LOGOUT_SUCCESS:
      return { ...state, isLoggedIn: false, user: null }
    case DashboardConstant.CONTACT_LIST_SUCCESS:
      return { ...state, contactList: payload }
    case DashboardConstant.GET_USER_SUCCESS:
      return { ...state, user: payload }
    case DashboardConstant.GET_USER_ERROR:
      return { ...state, user: null }

    default:
      return state
  }
}

export const DashboardReducer = { reducer }
