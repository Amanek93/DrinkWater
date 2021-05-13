import { AppState } from '@store/models';
import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { AuthState } from './reducer';

export const getAuthState = (state: AppState): AuthState => state.auth;

export const getUsers = createSelector(getAuthState, prop('userDatabase'));
