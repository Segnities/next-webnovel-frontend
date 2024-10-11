export interface DiscoverNovel {
    id:      number;
    title:   string;
    slug:    string;
    country: Country;
    img:     string;
}

export interface Country {
    title: string;
}