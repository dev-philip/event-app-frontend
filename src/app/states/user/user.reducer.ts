import { createReducer, on } from "@ngrx/store"
import { addLoginUserToState, removeLoginUserFromSTate } from "./user.actions"

export interface UserState {
    firstName: string,
    lastName: string,
    email: string,
    user_level: string
    created_at: string
}

export const initialUserState : UserState = {
    firstName: "",
    lastName: "",
    email: "",
    user_level: "",
    created_at: ""
}

export const userReducer = createReducer(
    initialUserState,
    on(addLoginUserToState, (state, user) => {
        // console.log("this is state", state);
        // console.log("this is user", user);
        // alert('User logged in!');
        return {
            ...state,
            ...user.user // spread the properties of the user payload directly into the state
        };
    }),
    on(removeLoginUserFromSTate, state => initialUserState)
);