import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Login from '../Login/Login'
import Create from '../Contacts/Create'

export const RoutedContent = () => {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/contact/create' component={Create} />
      {/* <Route path='/' component={Login} />
        <Route path='/register' component={Register} />
        <CustomRoute path='/dashboard' component={Dashboard} /> */}
    </Switch>
  )
}

const CustomRoute = ({
  component: Component,
  handleChildFunc,
  ...otherProps
}) => {
  const userData = localStorage.getItem('userData')
  return (
    <Route
      {...otherProps}
      render={props =>
        userData === null ? (
          <Redirect to='/login' />
        ) : (
          <Component
            {...props}
            user={userData}
            handleChildFunc={handleChildFunc}
          />
        )
      }
    />
  )
}
