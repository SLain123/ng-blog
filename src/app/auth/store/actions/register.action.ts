import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { IRegisterRequest } from '../../types/register_request.interface';

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<IRegisterRequest>(),
);
