import { Component, Input, OnInit } from '@angular/core';

import { IBackErrors } from 'src/app/shared/types/backErrors.interface';

@Component({
    selector: 'ng-back-error-messages',
    templateUrl: './backErrorMessages.component.html',
    styleUrls: ['./backErrorMessages.component.html'],
})
export class BackErrorMessagesComponent implements OnInit {
    @Input('backErrors') backErrorsProps: IBackErrors;

    errorMessages: string[];

    ngOnInit(): void {
        this.errorMessages = Object.keys(this.backErrorsProps)
            .filter((key) => Array.isArray(this.backErrorsProps[key]))
            .map((key) => `${key} ${this.backErrorsProps[key]}`);
    }
}
