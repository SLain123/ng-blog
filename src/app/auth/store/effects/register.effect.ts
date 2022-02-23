import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import {
    registerAction,
    registerSuccessAction,
    registerFailAction,
} from '../actions/register.action';
import { IUser } from 'src/app/shared/types/user.interface';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class RegisterEffect {
    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerAction),
            switchMap((request) =>
                this.authService.register(request).pipe(
                    map((user: IUser) => registerSuccessAction(user)),

                    catchError((err: HttpErrorResponse) =>
                        of(registerFailAction(err.error.errors)),
                    ),
                ),
            ),
        ),
    );

    constructor(private actions$: Actions, private authService: AuthService) {}
}
