import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Character } from '../models';
import { CharacterService } from '../services/character.service';

@Injectable({
    providedIn: 'root',
})
export class CharacterResolve implements Resolve<Character> {

    constructor(
        private router: Router,
        private characterService: CharacterService,
    ) { }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Character> {
        return this.characterService
            .findOne(route.params.characterId)
            .pipe(
                catchError(() => {
                    this.router.navigate([ '/', 'not-found' ], { replaceUrl: true });
                    return of(null);
                }),
            );
    }

}
