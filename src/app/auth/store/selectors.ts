import { createSelector } from '@ngrx/store';

import { IAuthState } from '../types/authState.interface';
import { IAppState } from '../../shared/types/appState.interface';

export const authFeatureSelector = (state: IAppState): IAuthState => state.auth;

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => authState.isSubmitting,
);

export const validationErrorsSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => authState.validationErrors,
);
