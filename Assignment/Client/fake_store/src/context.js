import React, {
    useState,
    useContext,
    useReducer,
    useEffect,
    createContext,
  } from 'react';

  export const CartContext=createContext()

  export const CartContextProvider=({childern})=>{
    const [cartCount, setCartCount]=useState(0);

const handleCount = (value) => {
  setCartCount(cartCount+value);
}
    return <CartContext.Provider value={{cartCount, handleCount}}>{childern}</CartContext.Provider>
  }

