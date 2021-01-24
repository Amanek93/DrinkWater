import { HomeAction, HomeActionTypes } from './actions';

export interface HomeState {
    drunkWater: number;
}

const initialState: HomeState = {
    drunkWater: 0,
};

export function reducer(state: HomeState = initialState, action: HomeAction): HomeState {
    switch (action.type) {
        case HomeActionTypes.CLEAR_PROGRESS:
            return initialState;

        case HomeActionTypes.DRINK_WATER:
            return { ...state, drunkWater: state.drunkWater + 250 };

        default:
            return state;
    }
}
