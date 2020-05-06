interface Item {
    name: string;
    resourceURI: string;
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
    stories: Array<Item>;
    events: Array<Item>;
    series: Array<Item>;
}
