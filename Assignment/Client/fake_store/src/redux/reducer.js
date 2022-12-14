import {
    ADD_ITEM,
    CLEAR_CART,
    DELETE_ITEM
  } from "./actionTypes";
  
  const initalState = {
    list: []
  };
  
  
  const cart = (state = initalState, action) => {
    switch (action.type) {
      case ADD_ITEM:
        return {
          list: [
            ...state.list,
            action.item
          ]
        };
      case CLEAR_CART:
        return initalState;
      case DELETE_ITEM:
        return {
          ...state,
          list: state.list.filter(item => item.id !== action.id)
        };
     
      default:
        return state;
    }
  };
  
  export default cart;
  