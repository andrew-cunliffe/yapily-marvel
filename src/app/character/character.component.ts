import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from '../../core/models';

@Component({
    templateUrl: './character.component.html',
    styleUrls: [ './character.component.scss' ],
})
export class CharacterComponent implements OnInit {

    public characterData: Character;

    constructor(
        private route: ActivatedRoute,
    ) { }

    public ngOnInit(): void {
        this.characterData = this.route.snapshot.data.characterData;
    }
}
