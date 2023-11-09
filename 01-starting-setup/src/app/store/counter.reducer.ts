import { createReducer } from "@ngrx/store";

const initialState = 0;

//1st way 
// export const counterReducer = createReducer(
//     initialState
// );

// 2nd  way to create Reducer 
export function counterReducer(state = initialState){
    return state;
}