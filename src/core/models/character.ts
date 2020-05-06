import { SafeStyle, SafeUrl } from '@angular/platform-browser';

export interface CharacterItems {
    available: number;
    items: Array<{
        name: string;
        resourceURI: string;
    }>;
}

export interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    image?: string;
    stories: CharacterItems;
    events: CharacterItems;
    series: CharacterItems;
}
