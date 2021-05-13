import { Reducer, combineReducers } from 'redux';

import { reducer as homeReducer } from '@home';
import { reducer as authReducer } from '@auth';

import { AppAction, AppState } from './models';

export const rootReducer: Reducer<AppState, AppAction> = combineReducers({
    home: homeReducer,
    auth: authReducer,
});
