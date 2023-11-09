import {
  ADDTOCART,
  REMOVEPRODUCT,
  REMOVEALL,
  INCREMENT,
  DECREMENT,
} from "./Type";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADDTOCART:
      const existedItem = state.find((item) => item.id === action.payload.id);
      const newState = state.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
        }
        return { ...item };
      });

      if (existedItem) {
        return newState;
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case REMOVEPRODUCT:
      const newCartState = state.filter((item) => {
        if (item.id === action.payload.id) {
          return false;
        }
        return true;
      });
      return newCartState;
    case INCREMENT:
      const addedItem = state.find((item) => item.id === action.payload.id);
      addedItem.quantity += 1;
      return [...state];
    case DECREMENT:
      const decrItem = state.find((item) => item.id === action.payload.id);
     
      if (decrItem?.quantity === 0) {
        const newCartState = state?.filter((item) => {
          if (item.id === action.payload.id) {
            return false;
          }
          return true;
        });
        return [ ...newCartState ];
      }else{
        decrItem.quantity -= 1;
      }
      return [...state];
    default:
      return state;
  }
};
