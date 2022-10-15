import {
    ADD_ITEM,
    CLEAR_CART,
    DELETE_ITEM,
  } from "./actionTypes";
  
  let count = 0;
  
  
  export const addItem = item => {
    return {
      type: ADD_ITEM,
      item
    };
  };
  
  export const clearCart = () => {
    return {
      type: CLEAR_CART
    };
  };
  
  export const deleteItem = id => {
    return {
      type: DELETE_ITEM,
      id
    };
  };
  
 
  