"use client";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import {
  fetchBorderNames,
  fetchDetails,
} from "../features/details/detailsThunks";
import {
  selectBorderNames,
  selectDetailsError,
  selectDetailsInfo,
  selectDetailsStatus,
} from "../features/details/detailsSlice";
import Info from "../components/Info";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Details() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const rawName = params?.name as string;
  const name = rawName ? decodeURIComponent(rawName) : "";

  const info = useAppSelector(selectDetailsInfo);
  const borderNames = useAppSelector(selectBorderNames);
  const status = useAppSelector(selectDetailsStatus);
  const error = useAppSelector(selectDetailsError);

  useEffect(() => {
    if (!name) return;
    dispatch(fetchDetails(name));
  }, [dispatch, name]);

  useEffect(() => {
    if (!info) return;
    dispatch(fetchBorderNames(info.borders ?? []));
  }, [dispatch, info]);

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!info) return <p>No data</p>;

  return (
    <section className="flex flex-col w-full gap-6 mx-auto my-0 max-w-7xl lg:gap-12">
      <Link
        href={"/"}
        className="px-3 py-3 text-center bg-white rounded-md max-w-28 text-lightText shadow-light dark:bg-darkEl dark:text-darkText dark:shadow-dark"
      >
        Back
      </Link>
      <Info {...info} borderNames={borderNames} />
    </section>
  );
}
