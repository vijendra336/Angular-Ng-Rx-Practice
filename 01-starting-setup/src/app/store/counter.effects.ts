import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.action';
import { tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selector';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions, private store: Store<{counter:number}>) {}

  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        // withLatestFrom(this.store.select('counter')) // counter selector 
        withLatestFrom(this.store.select(selectCount)), // selectCount from counter.selector.ts
        tap(([action, counter]) => {
          console.log(action);
          localStorage.setItem('count', counter.toString());
        })
      ),
    { dispatch: false } // means this effect does not dispatch a new action
  );
}
