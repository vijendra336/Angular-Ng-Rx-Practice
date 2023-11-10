import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.action";

const initialState = 0;

//1st way 
export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1 )
);

// 2nd  way to create Reducer 
// export function counterReducer(state = initialState){
//     return state;
// }