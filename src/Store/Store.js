import { createStore,applyMiddleware } from "redux";
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
// import rootReducer from "./rootReducer";
import {combineReducers} from 'redux'
import { SearchReducer } from './SearchReducer'
import { cartReducer } from './cartReducer'
const persistConfig = {
    key:'root',
    storage

}
const rootReducer =  combineReducers({
    SearchReducer:SearchReducer,
    cartReducer
})

const Store = createStore(persistReducer(persistConfig, rootReducer),applyMiddleware(thunk))
console.log("Store====>",Store);
export let persistor = persistStore(Store)
export default Store;
