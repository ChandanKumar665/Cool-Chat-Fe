import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Login from '../Login/Login'

export const RoutedContent = () => {
  return (
    <Switch>
      <Route path='/login' component={Login} />
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
