import { AppAction } from "../AppReducer"
import loginApi, { LoginBody } from "../../api/users/login"
import loginAction from "../Actions/loginAction"

import { setAuthToken } from "../../utils/localStorage"
import { setAuthorizationHeaders } from "../../utils/authorizationHeaders"

export interface LoginActionResponse {
  hasError: boolean
}

const loginMethod = async (
  dispatch: React.Dispatch<AppAction>,
  credentials: LoginBody
): Promise<LoginActionResponse> => {
  const { data, hasError, message } = await loginApi(credentials)
  if (!hasError) {
    setAuthToken(data.token)
    setAuthorizationHeaders(data.token)
    dispatch(loginAction(data))
  } else {
    console.log("Has Error: " + message)
  }
  return { hasError }
}

export default loginMethod
