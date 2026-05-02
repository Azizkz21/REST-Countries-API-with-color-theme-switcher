"use client";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { toggleTheme } from "../features/theme/themeSlice";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Header() {
  const dispatch = useAppDispatch();
  const { setTheme } = useTheme();
  const mode = useAppSelector((state) => state.theme.mode);
  useEffect(() => {
    setTheme(mode);
  }, [mode, setTheme]);
  return (
    <header className="flex items-center justify-between gap-2 bg-white px-4 py-4 shadow-light dark:bg-darkEl dark:shadow-dark">
      <Link
        href={"/"}
        className="text-base font-bold text-lightText dark:text-darkText sm:text-xl"
      >
        Where in the world?
      </Link>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="flex items-center gap-2 text-sm font-bold dark:text-white sm:text-lg"
      >
        Dark Mode
      </button>
    </header>
  );
}
