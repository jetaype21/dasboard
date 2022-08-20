import { createContext, useReducer } from "react";
import DarkModeReducer from "./DarkModeReducer.jsx";

const INITIAL_STATE = {
  darkMode: true
}

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE)


  return (
    <DarkModeContext.Provider value={[state, dispatch]}>
      {children}
    </DarkModeContext.Provider>
  )
}