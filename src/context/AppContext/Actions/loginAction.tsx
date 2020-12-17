import axios from "axios"

import { AppAction } from "../../AppContext/AppReducer"

export interface Credentials {
  email: string
  password: string
}

const loginAction = (dispatch: React.Dispatch<AppAction>, credentials: Credentials): void => {
  axios
    .post("http://localhost:5000/api/v1/public/users/login", credentials)
    .then((response) => {
      // TODO: set the localStorage token
      // TODO: set headers
      // TODO: Dispatch login success with more information
      dispatch({ type: "LOGIN_SUCCESS" })
    })
    .catch((error) => {
      // TODO: decide what to do when it fails
    })
    .then(() => {
      // TODO: check if finally block is necessary
    })
}
