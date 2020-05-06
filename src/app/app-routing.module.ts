import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';

import { CharacterResolve } from '../core/resolves';

const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        resolve: {
            characterData: CharacterResolve,
        },
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {}
