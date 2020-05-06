import { Component, Input } from '@angular/core';

import { CharacterItems } from '../../../core/models';

@Component({
    selector: 'app-items',
    templateUrl: './item-list.component.html',
    styleUrls: [ './item-list.component.scss' ],
})
export class ItemListComponent {

    @Input()
    public label: string;

    @Input()
    public name: string;

    @Input()
    public data: CharacterItems;

}
