export type Country = {
  cca3: string;
  name: {
    common: string;
  };
  capital: string[];
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: string;
};

export interface DetailCountry extends Country {
  name: {
    common: string;
    nativeName?: {
      [key: string]: {
        common: string;
      };
    };
  };
  borders?: string[];
  capital: string[];
  tld?: string[];

  flags: {
    png: string;
    svg: string;
    alt?: string;
  };

  languages?: {
    [key: string]: string;
  };

  subregion?: string;

  currencies?: {
    [key: string]: {
      name: string;
      symbol?: string;
    };
  };
}
