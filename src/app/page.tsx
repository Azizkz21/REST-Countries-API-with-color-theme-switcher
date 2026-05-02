import type { Metadata } from "next";
import Home from "../components/Home";

export const metadata: Metadata = {
  title: "Home",
  description: "Home desc",
};

const HomePage = () => {
  return <Home />;
};

export default HomePage;
