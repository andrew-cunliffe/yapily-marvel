import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { debounceTime } from 'rxjs/operators';

import { ApiResponse, Character } from '../../core/models';
import { CharacterService } from '../../core/services';

@Component({
    templateUrl: './landing.component.html',
    styleUrls: [ './landing.component.scss' ],
})
export class LandingComponent implements OnInit {

    public characterForm: FormGroup;
    public characterList: Array<Character>;

    constructor(
        private route: ActivatedRoute,
        private forms: FormBuilder,
        private characterService: CharacterService,
    ) { }

    public ngOnInit(): void {
        const characterData: ApiResponse<Character> = this.route.snapshot.data.characterData;
        this.characterList = characterData.results;

        this.characterForm = this.forms.group({
            search: [ undefined, [] ],
        });

        this.characterForm.get('search')
            .valueChanges
            .pipe(
                debounceTime(500),
            )
            .subscribe(() => this.performSearch());
    }

    public performSearch(): void {
        const form = this.characterForm.getRawValue();
        const query: { [ key: string ]: string } = {};

        if (form.search) {
            query.nameStartsWith = form.search;
        }

        this.characterService.findAll(query)
            .subscribe((characterData) => this.characterList = characterData.results);
    }
}
