import {ADD, CHANGE, DELETE, GET_LIST} from "./actionTypes";

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