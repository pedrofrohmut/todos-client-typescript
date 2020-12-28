import axios from "axios"

export const setAuthorizationHeaders = (token: string | undefined): void => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token
  }
}

export const deleteAuthorizationHeaders = () => {
  axios.defaults.headers.common["x-auth-token"] = ""
}
