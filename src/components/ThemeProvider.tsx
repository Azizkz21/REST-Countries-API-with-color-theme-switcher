import React, { useEffect } from "react";
import { useAppSelector } from "../hooks/hooks";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const mode = useAppSelector((s) => s.theme.mode);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("dark", mode === "dark");
    html.style.colorScheme = mode;
    localStorage.setItem("theme", mode);
  }, [mode]);
  return <>{children}</>;
}
