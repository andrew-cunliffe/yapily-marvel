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

    public findAll(): Observable<ApiResponse<Character>> {
        const params = this.buildAuthentication();
        console.log(params.toString());
        return this.http
            .get<ApiWrapper<Character>>(`${ this.baseUri }/v1/public/characters`, { params })
            .pipe(
                map((response: ApiWrapper<Character>) => {
                    const data = response.data;
                    data.results = data.results.map((item) => {
                        item.image = `${ item.thumbnail.path }.${ item.thumbnail.extension }`;
                        return item;
                    });
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
