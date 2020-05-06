import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiResponse, ApiWrapper, Character } from '../models';
import { HashService } from './hash.service';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CharacterService {

    private baseUri = 'https://gateway.marvel.com';

    constructor(
        private http: HttpClient,
        private hashService: HashService,
    ) { }

    public findOne(characterId: string): Observable<Character> {
        const params = this.buildAuthentication();

        return this.http.get<ApiWrapper<Character>>(`${ this.baseUri }/v1/public/characters/${characterId}`, { params })
            .pipe(
                map((response: ApiWrapper<Character>) => response.data.results[0]),
                map((character: Character) => ({ ...character, image: `${ character.thumbnail.path }.${ character.thumbnail.extension }` }))
            );
    }

    public findAll(query = {}): Observable<ApiResponse<Character>> {
        let params = this.buildAuthentication();

        Object.keys(query).map((key) => {
            params = params.set(key, query[key]);
        });

        return this.http
            .get<ApiWrapper<Character>>(`${ this.baseUri }/v1/public/characters`, { params })
            .pipe(
                map((response: ApiWrapper<Character>) => {
                    const data = response.data;
                    data.results = data.results.map((character: Character) => ({ ...character, image: `${ character.thumbnail.path }.${ character.thumbnail.extension }` }));
                    return data;
                }),
            );
    }

    private buildAuthentication(): HttpParams {
        const time = Date.now().toString(10);

        return new HttpParams()
            .set('ts', time)
            .set('apikey', environment.publicKey)
            .set('hash', this.hashService.generateMd5(`${ time }${ environment.privateKey }${ environment.publicKey }`));
    }

}
