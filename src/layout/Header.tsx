import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/hooks";
import { toggleTheme } from "../features/theme/themeSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  return (
    <header className="flex items-center justify-between gap-2 px-4 py-4 bg-white shadow-light dark:bg-darkEl dark:shadow-dark">
      <Link
        to={"/"}
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
