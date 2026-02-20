import type { Country, DetailCountry } from "../types/types";

const BASE_URL = "https://restcountries.com/v3.1/";

export const ALL_COUNTRIES =
  BASE_URL + "all?fields=name,capital,flags,population,region,cca3";

type BorderCountry = {
  cca3: string;
  name: {
    common: string;
  };
};

export const countriesApi = {
  getAll: async (): Promise<Country[]> => {
    const res = await fetch(ALL_COUNTRIES);
    if (!res.ok) throw new Error("API Error");
    return (await res.json()) as Country[];
  },
  getByName: async (name: string): Promise<DetailCountry[]> => {
    const res = await fetch(`${BASE_URL}name/${encodeURIComponent(name)}`);
    if (!res.ok) throw new Error("API Error");
    return (await res.json()) as DetailCountry[];
  },
  getByCode: async (codes: string[]): Promise<BorderCountry[]> => {
    const url = `${BASE_URL}alpha?codes=${codes.map(encodeURIComponent).join(",")}&fields=name,cca3`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("API Error");
    return (await res.json()) as BorderCountry[];
  },
};
