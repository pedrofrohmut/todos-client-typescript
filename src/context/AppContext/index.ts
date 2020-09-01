import { createContext } from "react"

const hello = () => console.log("Hello World!")

const INITIAL_STATE = Object.freeze({
  isAuthenticated: false,
  tasks: [
    "Rotina",
    "Supermercado",
    "Pets",
    "Carro",
    "Contas",
    "Banco"
  ],
  hello
})

export const AppContext = createContext(INITIAL_STATE)
