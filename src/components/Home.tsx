"use client";

import { useEffect } from "react";
import List from "../components/List";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { selectVisibleCountriesMemo } from "../features/countries/countriesSlice";
import { fetchCountries } from "../features/countries/countriesThunks";
import Card from "../components/Card";
import RegionSelect from "../components/RegionSelect";
import Search from "../components/Search";

export default function Home() {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectVisibleCountriesMemo);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  return (
    <section className="mx-auto my-0 flex w-full max-w-7xl flex-col gap-6 lg:gap-12">
      <form className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Search />
        <RegionSelect />
      </form>
      <List>
        {countries.map((item) => (
          <Card key={item.cca3} {...item} />
        ))}
      </List>
    </section>
  );
}
