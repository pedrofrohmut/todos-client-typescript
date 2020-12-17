import { createContext } from "react"

export interface AppState {
  isAuthenticated: boolean
  tasks: string[]
  message: string
  hello?: () => void
}

export const INITIAL_STATE: AppState = {
  isAuthenticated: false,
  tasks: [
    "Rotina",
    "Supermercado",
    "Pets",
    "Carro",
    "Contas",
    "Banco"
  ],
  message: "NO MESSAGE"
}

const AppContext = createContext(INITIAL_STATE)

export default AppContext
