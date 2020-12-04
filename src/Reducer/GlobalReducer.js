import { combineReducers } from 'redux'
import { LoginReducer } from '../Components/Login/LoginReducer'

export const GlobalReducer = combineReducers({
  LoginReducer: LoginReducer.reducer
})
