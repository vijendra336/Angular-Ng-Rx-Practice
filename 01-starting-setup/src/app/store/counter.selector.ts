import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";

export const selectCount= (state: {counter: number }) => state.counter;

// export const selectDoubleCount= (state: {counter: number }) => state.counter * 2 ;

// selectDoubleCounter selector value changed based on selectCount value 
export const selectDoubleCount=  createSelector(
    selectCount,
    (state) => state * 2
)
