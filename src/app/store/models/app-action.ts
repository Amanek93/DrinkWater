import { HomeAction } from '@home';
import { AuthAction } from '@auth';

export type AppAction = HomeAction | AuthAction;
