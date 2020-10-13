import React from "react"

import { Container } from "./styles"

import PageTitle from "../../components/shared/PageTitle"
import FormTabs from "../../components/shared/FormTabs"
import FormTab from "../../components/shared/FormTab"

const LoginPage: React.FC = () => (
  <Container className="LoginPage">
    <PageTitle>Todo App | Log in</PageTitle>
    <FormTabs>
      <FormTab isActive={true}>Log In</FormTab>
      <FormTab>Sign Up</FormTab>
    </FormTabs>
    <div className="form-wrapper">
      <form>
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

export default LoginPage
