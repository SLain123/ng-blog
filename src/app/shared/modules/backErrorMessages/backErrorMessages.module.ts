import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BackErrorMessagesComponent } from './components/backErrorMessages.component';

@NgModule({
    imports: [CommonModule],
    declarations: [BackErrorMessagesComponent],
    exports: [BackErrorMessagesComponent],
})
export class BackErrorMessagesModule {}
