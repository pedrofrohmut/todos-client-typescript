import { AppAction } from "../AppReducer"
import authenticateApi from "../../api/users/authenticate"
import authenticateAction from "../Actions/authenticateAction"
import { LoginPayload } from "../Actions/loginAction"

export interface AuthenticateBody {
  token: string
}

export interface AuthenticateMethodResponse {
  hasError: boolean
  message: string
}

const authenticateMethod = async (
  dispatch: React.Dispatch<AppAction>,
  authenticateBody: AuthenticateBody
): Promise<AuthenticateMethodResponse> => {
  const { token } = authenticateBody
  if (!token) {
    return {
      hasError: true,
      message: "No auth token"
    }
  }
  const { data, hasError, message } = await authenticateApi(token)
  if (!hasError) {
    const { id, firstName, lastName, email } = data
    const payload: LoginPayload = {
      id,
      firstName,
      lastName,
      email
    }
    dispatch(authenticateAction(payload))
  }
  return {
    hasError,
    message
  }
}

export default authenticateMethod
