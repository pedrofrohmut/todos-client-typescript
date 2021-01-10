import { AUTHENTICATE_SUCCESS } from "./Types/userTypes"
import { LoginPayload } from "./loginAction"

const authenticateAction = (payload: LoginPayload) => ({
  type: AUTHENTICATE_SUCCESS,
  payload
})

export default authenticateAction
