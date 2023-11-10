import { Action, createReducer, on } from "@ngrx/store";
import {   increment } from "./counter.action";
// import { increment } from "./counter.action";

const initialState = 0;

//1st way 
export const counterReducer = createReducer(
    initialState,
    on(increment, (state, action) => state + action.value )
);

// 2nd  way to create Reducer without createReducer Method 
// export const INCREMENT = '[Counter] Increment'

// export function counterReducer(state = initialState, action : CounterActions | Action){
    
//     if(action.type == INCREMENT){
//         return state + (action as IncrementAction).value;
//     }

//     return state;
// }