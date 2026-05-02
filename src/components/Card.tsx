
import Link from "next/link";
import type { Country } from "../types/types";

export default function Card({
  name,
  capital,
  flags,
  population,
  region,
}: Country) {
  return (
    <li>
      <Link
        href={`/details/${name.common}`}
        className="block h-full bg-white dark:bg-darkEl shadow-light"
      >
        <div className="h-h150">
          <img
            className="object-cover object-center w-full h-full"
            src={flags.svg}
            alt={name.common}
          />
        </div>
        <div className="flex flex-col gap-4 px-6 py-6">
          <h3 className="text-lg font-bold">{name.common}</h3>
          <ul className="flex flex-col gap-2">
            {population !== 0 && (
              <li className="flex items-center gap-1">
                <p className="text-base font-bold">Population:</p>
                <p className="text-base">{population}</p>
              </li>
            )}

            <li className="flex items-center gap-1">
              <p className="text-base font-bold">Region:</p>
              <p className="text-base">{region}</p>
            </li>
            {capital.length !== 0 && (
              <li className="flex items-center gap-1">
                <p className="text-base font-bold">Capital:</p>
                <p className="text-base">{capital}</p>
              </li>
            )}
          </ul>
        </div>
      </Link>
    </li>
  );
}
