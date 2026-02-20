
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setRegion } from "../features/countries/countriesSlice";

export default function RegionSelect() {
  const dispatch = useAppDispatch();
  const region = useAppSelector((s) => s.countries.region);
  return (
    <select
      value={region}
      onChange={(e) => dispatch(setRegion(e.target.value))}
      className="w-full p-3 bg-white rounded-md dark:bg-darkEl shadow-light dark:shadow-dark"
    >
      <option value="">All Regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
