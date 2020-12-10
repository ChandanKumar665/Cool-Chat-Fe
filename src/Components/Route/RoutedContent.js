import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { session } from '../../session'
import Create from '../Contacts/Create'
import Update from '../Contacts/Update'
import Dashboard from '../Dashboard/Dashboard'
import Login from '../Login/Login'
import Index from '../Profile/Index'
import Register from '../Register/Register'

export const RoutedContent = () => {
  return (
    <Switch>
      <Route
        path='/login'
        render={props =>
          !session.getSession() ? <Login /> : <Redirect to='/dashboard' />
        }
      />
      <Route
        path='/register'
        render={props =>
          !session.getSession() ? <Register /> : <Redirect to='/dashboard' />
        }
      />
      <CustomRoute path='/dashboard' component={Dashboard} />
      <CustomRoute path='/contact/create' component={Create} />
      <CustomRoute path='/profile' component={Index} />
      <CustomRoute path='/contact/update' component={Update} />
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
