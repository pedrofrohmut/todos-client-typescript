import { AppState } from "./index"
import { LOGIN_SUCCESS } from "./Actions/Types/userTypes"

export interface AppAction {
  type: string
  payload?: any
}

const AppReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("Login success", action.payload)
      return { ...state, isAuthenticated: true }
    default:
      return state
  }
}

export default AppReducer
