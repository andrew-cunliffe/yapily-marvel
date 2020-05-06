import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';

import { CharacterResolve, CharacterListResolve } from '../core/resolves';
import { CharacterComponent } from './character/character.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        resolve: {
            characterData: CharacterListResolve,
        },
    },
    {
        path: 'character/:characterId',
        component: CharacterComponent,
        resolve: {
            characterData: CharacterResolve,
        },
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {}
