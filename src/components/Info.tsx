import { Link } from "react-router-dom";
import type { DetailCountry } from "../types/types";

type InfoProps = DetailCountry & {
  borderNames: string[];
};

export default function Info({
  name,
  capital,
  flags,
  population,
  region,
  tld,
  languages,
  subregion,
  currencies,
  borderNames,
}: InfoProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8 xl:gap-12">
      <img
        className="object-cover w-full lg:w-3/6"
        src={flags?.svg}
        loading="lazy"
        alt={flags?.alt ?? `${name.common} flag`}
      />
      <div className="flex flex-col w-full gap-4 lg:w-3/6">
        <h1 className="text-2xl font-bold text-lightText dark:text-darkText md:text-3xl lg:text-3xl xl:text-4xl">
          {name.common}
        </h1>
        <div className="grid gap-3 sm:grid-cols-2">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <p className="text-base font-bold text-lightText dark:text-darkText">
                Native name:
              </p>
              <p className="text-base text-lightText dark:text-darkText">
                {name.nativeName
                  ? (Object.values(name.nativeName)[0]?.common ?? name.common)
                  : name.common}
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-base font-bold text-lightText dark:text-darkText">
                Population:
              </p>
              <p className="text-base text-lightText dark:text-darkText">
                {population}
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-base font-bold text-lightText dark:text-darkText">
                Region:
              </p>
              <p className="text-base text-lightText dark:text-darkText">
                {region}
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-base font-bold text-lightText dark:text-darkText">
                Sub region:
              </p>
              <p className="text-base text-lightText dark:text-darkText">
                {subregion ?? "--"}
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-base font-bold text-lightText dark:text-darkText">
                Capital:
              </p>
              <p className="text-base text-lightText dark:text-darkText">
                {capital.length > 0 ? capital.join(", ") : "--"}
              </p>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <p className="text-base font-bold text-lightText dark:text-darkText">
                Top Level Domain:
              </p>
              <p className="text-base text-lightText dark:text-darkText">
                {tld?.[0] ?? "--"}
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-base font-bold text-lightText dark:text-darkText">
                Currencies:
              </p>
              <p className="text-base text-lightText dark:text-darkText">
                {currencies
                  ? Object.values(currencies)
                      .map((c) => c.name)
                      .join(", ")
                      .toUpperCase()
                  : "--"}
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-base font-bold text-lightText dark:text-darkText">
                Languages:
              </p>
              <p className="text-base text-lightText dark:text-darkText">
                {languages ? Object.values(languages).join(", ") : "--"}
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 lg:items-center lg:flex-row">
          <p className="text-base font-bold text-lightText dark:text-darkText">
            Border countries
          </p>
          <ul className="flex flex-wrap items-center gap-4">
            {borderNames.length === 0 ? (
              <li className="text-base text-lightText dark:text-darkText">--</li>
            ) : (
              borderNames.map((item) => (
                <li key={item}>
                  <Link
                    className="px-3 py-3 text-center bg-white rounded-md max-w-28 text-lightText shadow-light dark:bg-darkEl dark:text-darkText dark:shadow-dark"
                    to={`/country/${item}`}
                  >
                    {item}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
