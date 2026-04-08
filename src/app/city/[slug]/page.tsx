import Header from "@/components/city/Header";
import OfficeList from "@/components/city/OfficeList";
import Navbar from "@/components/Navbar";
import { cities } from "@/entities/mock/cities";
import { offices } from "@/entities/mock/offices";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CityDetail({ params }: Props) {
  const { slug } = await params;

  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    return notFound();
  }

  const cityOffices = offices.filter((office) => office.location === city.name);

  return (
    <>
      <Navbar />
      <Header />
      <OfficeList cityOffices={cityOffices} />
    </>
  );
}
