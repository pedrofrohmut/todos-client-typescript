import { LOGIN_SUCCESS } from "./Types/userTypes"

export interface LoginPayload {
  id: string
  firstName: string
  lastName: string
  email: string
}

const loginAction = (payload: LoginPayload) => ({
  type: LOGIN_SUCCESS,
  payload
})

export default loginAction
