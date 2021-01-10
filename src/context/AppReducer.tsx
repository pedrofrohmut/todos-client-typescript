import { AppState } from "./index"
import { LOGIN_SUCCESS, AUTHENTICATE_SUCCESS } from "./Actions/Types/userTypes"

export interface AppAction {
  type: string
  payload?: any
}

const AppReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("Login success", action.payload)
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      }
    case AUTHENTICATE_SUCCESS:
      console.log("Authenticate success", action.payload)
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      }
    default:
      return state
  }
}

export default AppReducer
