import { Action } from '@ngrx/store';
import { GreetingActionTypes, GreetingAction } from './greeting.actions';
import { Greeting } from '../models/greeting.model';

const _general_greeting = 'How do you do?';
const _morning_greeting = 'Good morning.';
const _afternoon_greeting = 'Good afternoon.';
const _evening_greeting = 'Good evening.';

export function primaryReducer(state: Greeting = new Greeting(_general_greeting), action: GreetingAction) {
    console.log(action.type + ' ' + state.message);

    switch (action.type) {
        case GreetingActionTypes.MORNING_GREETING:
            return state = new Greeting(_morning_greeting);
        case GreetingActionTypes.AFTERNOON_GREETING:
            return state = new Greeting(_afternoon_greeting);
        case GreetingActionTypes.EVENING_GREETING:
            return state = new Greeting(_evening_greeting);
        case GreetingActionTypes.GENERAL_GREETING:
            return state = new Greeting(_general_greeting);
        default:
            return state;
    }
}

export const GreetingReducers = { PrimaryGreetingReducer: primaryReducer };
export class GreetingReducerTypes {
    public static readonly PrimaryGreetingReducer = 'PrimaryGreetingReducer';
}
