import { CATEGORYPRODUCT, SEARCHPRODUCT, ALLPRODUCT } from "./Type";
export const SearchReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCHPRODUCT:
      return action.payload;
    case CATEGORYPRODUCT:
      return action.payload;
    case ALLPRODUCT:
      return action.payload;
    default:
      return state;
  }
};
