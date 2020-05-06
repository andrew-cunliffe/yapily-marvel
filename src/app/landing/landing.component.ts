import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { debounceTime } from 'rxjs/operators';

import { ApiResponse, Character } from '../../core/models';
import { CharacterService } from '../../core/services';

import { PaginationEvent } from '../design/pagination/pagination-event';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
    templateUrl: './landing.component.html',
    styleUrls: [ './landing.component.scss' ],
})
export class LandingComponent implements OnInit {

    public characterForm: FormGroup;
    public characterData: ApiResponse<Character>;

    constructor(
        private route: ActivatedRoute,
        private forms: FormBuilder,
        private sanitizer: DomSanitizer,
        private characterService: CharacterService,
    ) { }

    public ngOnInit(): void {
        this.characterData = this.route.snapshot.data.characterData;

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

    public getSafe(url: string): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
    }

    public changePage(event: PaginationEvent): void {
        this.performSearch(--event.selectedPage * event.limit);
    }

    public performSearch(offset = 0): void {
        const form = this.characterForm.getRawValue();
        const query: { [ key: string ]: any } = {};

        if (offset) {
            query.offset = offset;
        }

        if (form.search) {
            query.nameStartsWith = form.search;
        }

        this.characterService.findAll(query)
            .subscribe((characterData) => this.characterData = characterData);
    }
}
