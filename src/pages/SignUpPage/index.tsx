import React from "react"

import { Container } from "./styles"

import PageTitle from "../../components/shared/PageTitle"
import FormTabs from "../../components/shared/FormTabs"
import FormTab from "../../components/shared/FormTab"

const SignUpPage: React.FC = () => (
  <Container className="SignUpPage">
    <PageTitle>Todo App | Sign up</PageTitle>
    <FormTabs>
      <FormTab>Log In</FormTab>
      <FormTab isActive={true}>Sign Up</FormTab>
    </FormTabs>
    <div className="form-wrapper">
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" type="password" />
        </div>
        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  </Container>
)

export default SignUpPage
