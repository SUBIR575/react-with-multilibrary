import { SEARCHPRODUCT } from "./Type";
import { CATEGORYPRODUCT,ALLPRODUCT, ADDTOCART, REMOVEPRODUCT, REMOVEALL, INCREMENT, DECREMENT } from "./Type";
import api from "../Component/Baseurl/Api";
export function searchproducts (product){
    return async (dispatch)=>{
        var res = await api.get(`/products/search?q=${product}`)
        dispatch({type:SEARCHPRODUCT,payload:res.data})
    }
}
export function categoryproducts (param){
    return async(dispatch)=>{
        var res = await api.get(`/products/category/${param}`)
        dispatch({type:CATEGORYPRODUCT,payload:res.data})
    }
}
export function allproducts (){
    return async (dispatch)=>{
        var res = await api.get(`/products/`)
        dispatch({type:ALLPRODUCT,payload:res.data})
    }
}
export function addtocart (data){
    return{
        type:ADDTOCART,
        payload:data
    }
}
export function removeproduct (data){
    return{
        type:REMOVEPRODUCT,
        payload:data
    }
}
export function incrementproduct(data){
    return{
        type:INCREMENT,
        payload:data
    }
}
export function decrementproduct(data){
    return{
        type:DECREMENT,
        payload:data
    }
}
export function removeall(){
    return{
        type:REMOVEALL
    }
}
