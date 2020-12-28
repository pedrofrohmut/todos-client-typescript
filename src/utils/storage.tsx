const LS_AUTH_TOKEN = "TODO_APP_AUTH_TOKE"

export const setAuthToken = (token: string): void => {
  localStorage.setItem(LS_AUTH_TOKEN, token)
}

export const removeAuthToken = () => {
  localStorage.removeItem(LS_AUTH_TOKEN)
}
