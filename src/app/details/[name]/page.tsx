import type { Metadata } from "next";
import Details from "../../../components/Details";

interface Props {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);
  return {
    title: `Details - ${decodedName}`,
    description: `Information about ${decodedName}`,
  };
}

const DetailsPage = () => {
  return <Details />;
};

export default DetailsPage;
