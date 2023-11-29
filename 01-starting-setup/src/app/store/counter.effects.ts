import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment } from "./counter.action";
import { tap } from "rxjs";

export class CounterEffects{
    
    constructor(private actions$ : Actions){
    }

    saveCount= createEffect(()=> this.actions$.pipe(
        ofType(increment, decrement),
        tap((action) => {
            console.log(action);
            localStorage.setItem('count',action.value.toString());
        })
    ) );

}