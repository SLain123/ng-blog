import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from '../../store/actions/register.action';
import { IAppState } from '../../../shared/types/appState.interface';
import { isSubmittingSelector } from '../../store/selectors';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'nb-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    isSubmitting$: Observable<boolean>;

    constructor(
        private fb: FormBuilder,
        private store: Store<IAppState>,
        private auchService: AuthService,
    ) {}

    ngOnInit(): void {
        this.initializeForm();
        this.initializeValues();
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
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
        this.auchService
            .register(this.form.value)
            .subscribe((currentUser) => console.log(currentUser));
    }
}
