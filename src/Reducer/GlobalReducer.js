import { combineReducers } from 'redux'
import { LoginReducer } from '../Components/Login/LoginReducer'
import { DashboardReducer } from '../Components/Dashboard/DashboardReducer'

export const GlobalReducer = combineReducers({
  LoginReducer: LoginReducer.reducer,
  DashboardReducer: DashboardReducer.reducer
})
