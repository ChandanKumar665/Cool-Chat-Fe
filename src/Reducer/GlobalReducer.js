import { combineReducers } from 'redux'
import { ContactReducer } from '../Components/Contacts/ContactReducer'
import { DashboardReducer } from '../Components/Dashboard/DashboardReducer'
import { LoginReducer } from '../Components/Login/LoginReducer'
import { ProfileReducer } from '../Components/Profile/ProfileReducer'

export const GlobalReducer = combineReducers({
  LoginReducer: LoginReducer.reducer,
  DashboardReducer: DashboardReducer.reducer,
  ProfileReducer: ProfileReducer.reducer,
  ContactReducer: ContactReducer.reducer
})
