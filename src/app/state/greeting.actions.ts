import { Action } from '@ngrx/store';

export class GreetingActionTypes {
    public static readonly GENERAL_GREETING = 'GENERAL_GREETING';
    public static readonly MORNING_GREETING = 'MORNING_GREETING';
    public static readonly AFTERNOON_GREETING = 'AFTERNOON_GREETING';
    public static readonly EVENING_GREETING = 'EVENING_GREETING';
}

export class GeneralGreetingAction implements Action {
    type: string = GreetingActionTypes.GENERAL_GREETING;
}

export class MorningGreetingAction implements Action {
    type: string = GreetingActionTypes.MORNING_GREETING;
}

export class AfternoonGreetingAction implements Action {
    type: string = GreetingActionTypes.AFTERNOON_GREETING;
}

export class EveningGreetingAction implements Action {
    type: string = GreetingActionTypes.EVENING_GREETING;
}

export type GreetingAction = GeneralGreetingAction | MorningGreetingAction | AfternoonGreetingAction | EveningGreetingAction;
