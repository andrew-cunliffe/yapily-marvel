import { NgModule } from '@angular/core';

import { InputModule } from './input/input.module';
import { PaginationModule } from './pagination/pagination.module';

@NgModule({
    imports: [
        InputModule,
        PaginationModule,
    ],
    exports: [
        InputModule,
        PaginationModule,
    ],
})
export class DesignModule {
}
