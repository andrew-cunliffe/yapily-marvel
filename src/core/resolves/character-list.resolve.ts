import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ApiResponse, Character } from '../models';
import { CharacterService } from '../services/character.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CharacterListResolve implements Resolve<ApiResponse<Character>> {

    constructor(
        private characterService: CharacterService,
    ) { }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ApiResponse<Character>> {
        return this.characterService.findAll();
    }


}
