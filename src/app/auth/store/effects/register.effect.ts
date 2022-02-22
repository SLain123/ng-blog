import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
    registerAction,
    registerSuccessAction,
    registerFailAction,
} from '../actions/register.action';
import { ICurrentUser } from 'src/app/shared/types/current_user.interface';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class RegisterEffect {
    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerAction),
            switchMap((request) => {
                return this.authService.register(request).pipe(
                    map((user: ICurrentUser) => {
                        return registerSuccessAction(user);
                    }),

                    catchError(() => {
                        return of(registerFailAction());
                    }),
                );
            }),
        ),
    );

    constructor(private actions$: Actions, private authService: AuthService) {}
}
