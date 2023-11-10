import { Action, createAction, props } from "@ngrx/store";

// export const increment = createAction(
//     '[Counter] Increment', 
//     props<{value: number}>()
// );


export class IncrementAction implements Action{
    readonly type=  '[Counter] Increment';

    constructor(public value: number ){

    }

}

export type CounterActions = IncrementAction;