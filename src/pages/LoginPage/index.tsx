import React, { useReducer } from "react"

import { Container } from "./styles"

import { INITIAL_STATE } from "../../context/AppContext"
import AppReducer from "../../context/AppContext/AppReducer"
import loginAction from "../../context/AppContext/Actions/loginAction"

import PageTitle from "../../components/shared/PageTitle"
import FormTabs from "../../components/shared/FormTabs"
import FormTab from "../../components/shared/FormTab"

const LoginPage: React.FC = () => {
  const [, dispatch] = useReducer(AppReducer, INITIAL_STATE)

  const submitForm = async (event: React.FormEvent) => {
    event.preventDefault()
    // TODO: Make it take values from fields
    const credentials = {
      email: "bob_marley@mail.com",
      password: "1234"
    }
    const loginActionResponse = await loginAction(dispatch, credentials)
    // TODO: Feedback baloon implementation for success an error
    console.log("ACTION RESPONSE: ", loginActionResponse)
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
