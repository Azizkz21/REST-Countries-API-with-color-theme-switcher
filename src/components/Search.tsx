import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setSearch } from "../features/countries/countriesSlice";

export default function Search() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((s) => s.countries.search);
  return (
    <input
      value={search}
      onChange={(e) => dispatch(setSearch(e.target.value))}
      placeholder="Search for a country..."
      className="w-full p-3 bg-white rounded-md dark:bg-darkEl shadow-light dark:shadow-dark"
    />
  );
}
