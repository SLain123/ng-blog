import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';
import { IRegisterRequest } from '../../types/register_request.interface';
import { IUser } from '../../../shared/types/user.interface';
import { IBackErrors } from './../../../shared/types/backErrors.interface';

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<IRegisterRequest>(),
);

export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<IUser>(),
);

export const registerFailAction = createAction(
    ActionTypes.REGISTER_FAIL,
    props<IBackErrors>(),
);
