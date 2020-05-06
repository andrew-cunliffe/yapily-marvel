import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputComponent } from './input.component';
import { InputDirective } from './input.directive';

@NgModule({
    declarations: [
        InputComponent,
        InputDirective,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        InputComponent,
    ],
})
export class InputModule {}
