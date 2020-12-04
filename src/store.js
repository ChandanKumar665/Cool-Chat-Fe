import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { GlobalReducer } from './Reducer/GlobalReducer'
import thunkMiddleware from 'redux-thunk'

const store = createStore(GlobalReducer, applyMiddleware(thunkMiddleware))

export default store
