import { AppAction } from "../../AppContext/AppReducer"
import { setAuthToken } from "../../../utils/storage"
import { setAuthorizationHeaders } from "../../../utils/authorizationHeaders"
import loginApi, { LoginBody } from "../../../api/users/login"

export interface LoginActionResponse {
  hasError: boolean
}

export default async (
  dispatch: React.Dispatch<AppAction>,
  credentials: LoginBody
): Promise<LoginActionResponse> => {
  const { data, hasError, message } = await loginApi(credentials)
  if (!hasError) {
    setAuthToken(data.token)
    setAuthorizationHeaders(data.token)
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data
    })
  } else {
    console.log("Has Error: " + message)
  }
  return { hasError }
}
