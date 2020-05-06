import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiResponse, Character } from '../../core/models';

@Component({
    templateUrl: './landing.component.html',
    styleUrls: [ './landing.component.scss' ],
})
export class LandingComponent implements OnInit {

    public characterList: Array<Character>;

    constructor(
        private route: ActivatedRoute,
    ) { }

    public ngOnInit(): void {
        const characterData: ApiResponse<Character> = this.route.snapshot.data.characterData;
        this.characterList = characterData.results;
    }
}
