import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/store/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { CounterEffects } from './app/store/counter.effect';

bootstrapApplication(AppComponent, {
    providers: [provideStore({
        counter: counterReducer
        // just like counterReducer you can add more reducer here key: Value pair 
    }), provideEffects(CounterEffects)]
});
