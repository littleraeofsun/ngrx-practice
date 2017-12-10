import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { GreetingReducerTypes } from '../../state/greeting.reducer';
import * as GreetingActions from '../../state/greeting.actions';
import { Greeting } from '../../models/greeting.model';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  greeting$: Observable<Greeting>;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.greeting$ = this.store.select(GreetingReducerTypes.PrimaryGreetingReducer);
  }

  onUnknownClicked() {
    this.store.dispatch(new GreetingActions.GeneralGreetingAction());
  }
  onMorningClicked() {
    this.store.dispatch(new GreetingActions.MorningGreetingAction());
  }
  onAfternoonClicked() {
    this.store.dispatch(new GreetingActions.AfternoonGreetingAction());
  }
  onEveningClicked() {
    this.store.dispatch(new GreetingActions.EveningGreetingAction());
  }
}
