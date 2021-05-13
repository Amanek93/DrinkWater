import { HomeState } from '@home';
import {AuthState} from "@auth";

export interface AppState {
    home: HomeState;
    auth: AuthState;
}
