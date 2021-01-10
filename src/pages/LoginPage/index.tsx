import React, { useState } from "react"

import { Container } from "./styles"

import { AppAction } from "../../context/AppReducer"
import loginMethod from "../../context/Methods/loginMethod"

import PageTitle from "../../components/shared/PageTitle"
import FormTabs from "../../components/shared/FormTabs"
import FormTab from "../../components/shared/FormTab"
import LoadingSpinner from "../../components/shared/LoadingSpinner"
import ErrorAlert from "../../components/shared/messages/ErrorAlert"

interface Props {
  dispatch: React.Dispatch<AppAction>
}

const LoginPage: React.FC<Props> = ({ dispatch }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [message, setMessage] = useState("")

  const resetFormErrors = () => {
    setMessage("")
    setHasError(false)
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
    if (loginActionResponse.hasError) {
      setIsLoading(false)
      setMessage(loginActionResponse.message)
      setHasError(true)
    }
  }

  return (
    <Container className="LoginPage">
      <PageTitle>Todo App | Log in</PageTitle>
      {hasError && <ErrorAlert message={`Error to log in: ${message}`} />}
      {isLoading && <LoadingSpinner message="Logging in..." />}
      {!isLoading && (
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
