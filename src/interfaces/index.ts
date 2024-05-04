export interface Characters {
    amiibo: Character[];
}

export interface Character {
    name: string;
    image: string;
    tail: string;
    gameSeries: string;
    head: string;
    character : string;
    release: {
      au: string;
      eu: string;
      jp: string;
      na: string;
    };
    type: string;
    amiiboSeries: string; // Added property
  }

export interface Relase {
    au:Date;
    eu:Date;
    jp:Date;
    na:Date;
}