import { Action } from '@store/models';
import { AuthForm } from './models/authForm';

export enum AuthActionTypes {
    ADD_USER = '[AUTH] Add new user to database',
    SET_USER = '[AUTH] Set current user from database',
}

export class AddUser implements Action<string> {
    readonly type = AuthActionTypes.ADD_USER;
    constructor(public payload: AuthForm) {}
}

export class SetUser implements Action<string> {
    readonly type = AuthActionTypes.SET_USER;
    constructor(public payload: AuthForm) {}
}

export type AuthAction = AddUser | SetUser;
