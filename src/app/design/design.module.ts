import { NgModule } from '@angular/core';
import { PaginationModule } from './pagination/pagination.module';

@NgModule({
    imports: [
        PaginationModule,
    ],
    exports: [
        PaginationModule,
    ],
})
export class DesignModule {
}
