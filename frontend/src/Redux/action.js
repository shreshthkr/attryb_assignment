import { GET_INVENTORY_ERROR, GET_INVENTORY_REQUEST, GET_INVENTORY_SUCCESS } from "./actionType"
import axios from "axios";



export const getInventoryRequest = () => {
    return {type: GET_INVENTORY_REQUEST};
};

export const getInventorySuccess = (payload)=> {
    return {type: GET_INVENTORY_SUCCESS,payload};
};


export const getInventoryError = () => {
    return {type:GET_INVENTORY_ERROR};
};


export const getInventory = (param) => (dispatch) => {
    dispatch(getInventoryRequest());
    axios.get(`https://alert-rose-lovebird.cyclic.app/inventory`,param)
    .then((res)=> {
        console.log(param);
        dispatch(getInventorySuccess(res.data.Data))
    })
    .catch((err)=>{
        dispatch(getInventoryError())
    })
}