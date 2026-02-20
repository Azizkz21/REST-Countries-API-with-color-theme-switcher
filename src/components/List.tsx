import React from "react";

type Props = { children: React.ReactNode };

export default function List({ children }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6 xl:grid-cols-4 xl:gap-8">
      {children}
    </ul>
  );
}
