import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Login from '../Login/Login'
import Create from '../Contacts/Create'
import { session } from '../../session'
export const RoutedContent = () => {
  return (
    <Switch>
      <Route
        path='/login'
        render={props =>
          !session.getSession() ? <Login /> : <Redirect to='/dashboard' />
        }
      />
      <CustomRoute path='/dashboard' component={Dashboard} />
      <CustomRoute path='/contact/create' component={Create} />
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
  const userData = session.getSession()
  return (
    <Route
      {...otherProps}
      render={props =>
        !userData ? (
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
