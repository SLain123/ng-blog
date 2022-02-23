import { createReducer, on, Action } from '@ngrx/store';

import { IAuthState } from '../types/authState.interface';
import {
    registerAction,
    registerSuccessAction,
    registerFailAction,
} from './actions/register.action';

const initialState: IAuthState = {
    isSubmitting: false,
    user: null,
    isLoggedIn: null,
    validationErrors: null,
};

const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state): IAuthState => ({
            ...state,
            isSubmitting: true,
            validationErrors: null,
        }),
    ),

    on(
        registerSuccessAction,
        (state, user): IAuthState => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            user,
        }),
    ),

    on(
        registerFailAction,
        (state, validationErrors): IAuthState => ({
            ...state,
            isSubmitting: false,
            validationErrors,
        }),
    ),
);

export function reducers(state: IAuthState, action: Action) {
    return authReducer(state, action);
}
