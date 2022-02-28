import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from '../../store/actions/register.action';
import { IAppState } from '../../../shared/types/appState.interface';
import {
    isSubmittingSelector,
    validationErrorsSelector,
} from '../../store/selectors';
import { IBackErrors } from 'src/app/shared/types/backErrors.interface';

@Component({
    selector: 'nb-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    isSubmitting$: Observable<boolean>;
    backErrors$: Observable<IBackErrors | null>;

    constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

    ngOnInit(): void {
        this.initializeForm();
        this.initializeValues();
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.backErrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    initializeForm(): void {
        this.form = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    onSubmit(): void {
        this.store.dispatch(registerAction(this.form.value));
    }
}
