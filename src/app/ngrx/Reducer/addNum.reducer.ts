import { createReducer, on } from "@ngrx/store";
import { addNum } from "../Action/add.action";

export const initialState = 0;


export const _addNumReducer = createReducer(
    initialState, 
    on(addNum,(state,action) => {
        // console.log(typeof action.num);
        state = state + action.num;
        return state
    })
);




export function addNumReducer(state:any,action:any){
    return _addNumReducer(state,action)
}