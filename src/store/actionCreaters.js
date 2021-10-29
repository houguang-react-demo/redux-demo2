import {ADD, CHANGE, DELETE, GET_LIST} from "./actionTypes";
import axios from "axios";

export const changeAction = (value) => ({
    type: CHANGE,
    value
})

export const addItemAction = () => ({
    type: ADD
})

export const deleteAction = (index) => ({
    type: DELETE,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getList = () => {
    return (dispatch)=>{
        axios.get("http://127.0.0.1:4523/mock/389130/list").then(res=>{
            let action = getListAction(res.data.data.list);
            dispatch(action)
        })
    }
}