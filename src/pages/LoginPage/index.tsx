import React, { useReducer } from "react"
import axios from "axios"

import { Container } from "./styles"

import { INITIAL_STATE } from "../../context/AppContext"
import AppReducer from "../../context/AppContext/AppReducer"

import PageTitle from "../../components/shared/PageTitle"
import FormTabs from "../../components/shared/FormTabs"
import FormTab from "../../components/shared/FormTab"

const LoginPage: React.FC = () => {
  const [, dispatch] = useReducer(AppReducer, INITIAL_STATE)

  // TODO: import from other file and make it work as production method
  const loginAction = (dispatch: any, data: object): void => {
    axios
      .post("http://localhost:5000/api/v1/public/users/login", {
        email: "bob_marley@mail.com",
        password: "123"
      })
      // then block
      .then((response) => {
        const { token } = response.data.data
        console.log("SUCCESS!", token)
        dispatch({ type: "LOGIN_SUCCESS" })
      })
      //catch block
      .catch((error) => console.log("ERROR", error))
      // finally block - always executed
      .then(() => {
        console.log("Finally")
      })
  }

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault()
    const credentials = {
      email: "bob_marley@mail.com",
      password: "123"
    }
    loginAction(dispatch, credentials)
  }

  return (
    <Container className="LoginPage">
      <PageTitle>Todo App | Log in</PageTitle>
      <FormTabs>
        <FormTab isActive={true}>Log In</FormTab>
        <FormTab>Sign Up</FormTab>
      </FormTabs>
      <div className="form-wrapper">
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input id="email" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
          </div>
          <div className="form-group">
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default LoginPage
