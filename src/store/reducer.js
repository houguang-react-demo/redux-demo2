import {ADD, CHANGE, DELETE, GET_LIST} from "./actionTypes";

const defaultState = {
    inputValue:"write something",
    list:[]
};
const reducer = (state = defaultState,action)=>{

    if (action.type === CHANGE){
        state.inputValue = action.value
        return state
    }

    if (action.type === ADD){
        if (state.inputValue !== ""){
            state.list.push(state.inputValue)
            state.inputValue = ""
        }
        return state
    }

    if (action.type === DELETE){
        state.list.splice(action.index,1)
        return state;
    }

    if (action.type === GET_LIST){
        state.list=action.data;
        return state
    }

    return state
}

export default reducer