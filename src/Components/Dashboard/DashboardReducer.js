import { DashboardConstant } from './DashboardConstant'

//reducer will connect to the store
const reducer = (state = '', action) => {
  const { type, payload } = action
  //define all the cases here
  switch (type) {
    case DashboardConstant.LOGOUT_SUCCESS:
      return { ...state, isLoggedIn: false, user: null }
    case DashboardConstant.CONTACT_LIST_SUCCESS:
      return { ...state, contactList: payload }
    default:
      return state
  }
}

export const DashboardReducer = { reducer }
