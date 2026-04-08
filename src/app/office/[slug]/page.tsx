import Navbar from "@/components/Navbar";
import Content from "@/components/office/Content";
import Gallery from "@/components/office/Gallery";
import { offices } from "@/entities/mock/offices";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function OfficeDetail({ params }: Props) {
  const { slug } = await params;

  const office = offices.find((o) => o.slug === slug);

  if (!office) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <Gallery office={office} />
      <Content office={office} />
    </>
  );
}
