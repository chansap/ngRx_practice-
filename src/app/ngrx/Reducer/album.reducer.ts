import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { getAlbumAction, getAlbumActionSuccess } from "../Action/add.action";


export const initialState: any = {};


export const _gettingAlbums = createReducer(
    initialState,
    // on(getAlbumAction, (state) => {
    //     return state
    // }),

    on(getAlbumActionSuccess, (state, action) => {
        console.log("Action reducer ->",action);
        console.log("Action reducer ->",typeof action)
        console.log("state reducer ->",state);
        // return {...state, action}
        // let arr:any = []
        // arr.push(action)
        // console.log("The array",arr);
        // return arr
        return action
    })
)




export function gettingAlbumsReducer(state:any, action:any){
    return _gettingAlbums(state, action)
}