import React, { useReducer, useState } from "react"

import { Container } from "./styles"

import { INITIAL_STATE } from "../../context"
import AppReducer from "../../context/AppReducer"
import loginMethod from "../../context/Methods/loginMethod"

import PageTitle from "../../components/shared/PageTitle"
import FormTabs from "../../components/shared/FormTabs"
import FormTab from "../../components/shared/FormTab"
import LoadingSpinner from "../../components/shared/LoadingSpinner"
import ErrorAlert from "../../components/shared/messages/ErrorAlert"
import SuccessAlert from "../../components/shared/messages/SuccessAlert"

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [message, setMessage] = useState("")
  const [, dispatch] = useReducer(AppReducer, INITIAL_STATE)

  const resetFormErrors = () => {
    setMessage("")
    setHasError(false)
    setIsSuccess(false)
  }

  const clearFormFields = () => {
    setEmail("")
    setPassword("")
  }

  const submitForm = async (event: React.FormEvent) => {
    event.preventDefault()
    resetFormErrors()
    clearFormFields()
    // TODO: form fields validation here
    setIsLoading(true)
    const loginActionResponse = await loginMethod(dispatch, { email, password })
    setIsLoading(false)
    setMessage(loginActionResponse.message)
    if (loginActionResponse.hasError) {
      setHasError(true)
    } else {
      setIsSuccess(true)
    }
    // TODO: Feedback baloon implementation for success an error
    console.log("ACTION RESPONSE: ", loginActionResponse)
  }

  return (
    <Container className="LoginPage">
      <PageTitle>Todo App | Log in</PageTitle>
      {hasError && <ErrorAlert message={`Error to log in: ${message}`} />}
      {isSuccess && <SuccessAlert message={`Success: ${message}`} />}
      {isLoading && <LoadingSpinner message="Logging in..." />}
      {!isLoading && !isSuccess && (
        <>
          <FormTabs>
            <FormTab isActive={true}>Log In</FormTab>
            <FormTab>Sign Up</FormTab>
          </FormTabs>
          <div className="form-wrapper">
            <form onSubmit={submitForm} onFocus={resetFormErrors}>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="submit">Log In</button>
              </div>
            </form>
          </div>
        </>
      )}
    </Container>
  )
}

export default LoginPage
