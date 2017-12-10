import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { GreetingReducers } from './state/greeting.reducer';


@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(GreetingReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
