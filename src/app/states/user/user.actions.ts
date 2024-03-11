import { createAction, props } from "@ngrx/store";
import { UserState } from "./user.reducer";



export const addLoginUserToState = createAction(
    '[User] Add Login User To State',
    props<{ user: UserState}>()
  );

export const removeLoginUserFromSTate = createAction("[User] Remove User From State");