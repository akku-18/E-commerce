import { createContext } from "react";

export const Context = createContext();


export default function AppContext({children}) {
  return (
    <Context.Provider>
        {children}
    </Context.Provider>
  )
}
