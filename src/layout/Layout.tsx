import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex flex-col min-h-full bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 grow">
      <Header />
      <main className="px-4 py-10 grow bg-lightBg dark:bg-darkBg">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
