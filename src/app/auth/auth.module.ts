import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from './components/register/register.component';
import { reducers } from './store/reducers';
import { AuthService } from './services/auth.service';
import { RegisterEffect } from './store/effects/register.effect';
import { BackErrorMessagesModule } from '../shared/modules/backErrorMessages/backErrorMessages.module';

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
];

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([RegisterEffect]),
        BackErrorMessagesModule,
    ],
    providers: [AuthService],
})
export class AuthModule {}
