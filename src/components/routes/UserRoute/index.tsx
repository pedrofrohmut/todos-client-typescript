import React from "react"
import { Route, Redirect, RouteProps } from "react-router-dom"

interface Props extends RouteProps {
  isAuthenticated: boolean
}

const UserRoute: React.FC<Props> = ({ isAuthenticated, children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    }
  />
)

export default UserRoute
