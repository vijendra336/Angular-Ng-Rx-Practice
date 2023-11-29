import { Action, createAction, props } from "@ngrx/store";

// 1st way using createAction
export const increment = createAction(
    '[Counter] Increment', 
    props<{value: number}>()
);


//2nd way creating action without createAction 

// export class IncrementAction implements Action{
//     readonly type=  '[Counter] Increment';

//     constructor(public value: number ){

//     }

// }

// export type CounterActions = IncrementAction;

export const decrement = createAction(
    '[Counter] Decrement',
    props<{value:number}>()
)