import { CounterState } from "./counter/counter.reducer";
import { UserState } from "./user/user.reducer";

export interface AppState {
    counter: CounterState
    user: UserState
}