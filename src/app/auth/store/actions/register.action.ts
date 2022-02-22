import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';
import { IRegisterRequest } from '../../types/register_request.interface';
import { ICurrentUser } from '../../../shared/types/current_user.interface';

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<IRegisterRequest>(),
);

export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<ICurrentUser>(),
);

export const registerFailAction = createAction(ActionTypes.REGISTER_FAIL);
