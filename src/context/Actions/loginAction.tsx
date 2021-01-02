import { LOGIN_SUCCESS } from "./Types/userTypes"

export interface UserPayload {
  id: string
  firstName: string
  lastName: string
  email: string
}

export interface LoginPayload {
  token: string
  user: UserPayload
}

const loginAction = (payload: LoginPayload) => ({
  type: LOGIN_SUCCESS,
  payload
})

export default loginAction
