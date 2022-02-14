import { createReducer, on, Action } from '@ngrx/store';

import { IAuthState } from '../types/authState.interface';
import { registerAction } from './actions/register.action';

const initialState: IAuthState = {
    isSubmitting: false,
};

const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state): IAuthState => ({ ...state, isSubmitting: true }),
    ),
);

export function reducers(state: IAuthState, action: Action) {
    return authReducer(state, action);
}
