import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()
const createSession = (data, path = '/dashboard') => {
  localStorage.setItem('user', JSON.stringify(data))
  window.location = path
}
const getSession = () => {
  let user = JSON.parse(localStorage.getItem('user'))
  return user || null
}
const destroySession = () => {
  localStorage.setItem('user', null)
  localStorage.clear()
  window.location = '/login'
}

export const session = { createSession, getSession, destroySession }
