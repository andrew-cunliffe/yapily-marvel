import { NgModule } from '@angular/core';

import { InputModule } from './input/input.module';
import { ItemListModule } from './item-list/item-list.module';
import { PaginationModule } from './pagination/pagination.module';

@NgModule({
    imports: [
        InputModule,
        ItemListModule,
        PaginationModule,
    ],
    exports: [
        InputModule,
        ItemListModule,
        PaginationModule,
    ],
})
export class DesignModule {
}
