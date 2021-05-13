import { AuthAction, AuthActionTypes } from './actions';
import {User} from "./models/user";

export interface AuthState {
    userDatabase: Array<User>;
    currentUser: User;
    loginSuccess: boolean;
    isLoading: boolean;
}

const initialState: AuthState = {
    userDatabase: [],
    currentUser: {},
    loginSuccess: false,
    isLoading: false,
};

export function reducer(state: AuthState = initialState, action: AuthAction): AuthState {
    switch (action.type) {

        case AuthActionTypes.ADD_USER:
            return { ...state, userDatabase: state.userDatabase.concat(action.payload) };

        case AuthActionTypes.SET_USER:
            return { ...state, currentUser: state.userDatabase.concat(action.payload) };

        default:
            return state;
    }
}
