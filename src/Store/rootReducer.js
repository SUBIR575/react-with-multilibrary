import {combineReducers} from 'redux'
import { SearchReducer } from './SearchReducer'
import { cartReducer } from './cartReducer'
export default combineReducers({
    SearchReducer,
    cartReducer
})