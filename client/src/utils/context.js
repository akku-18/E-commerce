import { createContext } from "react";
import { useState } from "react";

export const Context = createContext();


export default function AppContext({children}) {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  return (
    <Context.Provider value={{
      categories,
      setCategories,
      products,
      setProducts,
    }}>
        {children}
    </Context.Provider>
  )
}
