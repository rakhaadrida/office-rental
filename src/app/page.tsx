import CityList from "@/components/homepage/CityList";
import Feature from "@/components/homepage/Feature";
import Header from "@/components/homepage/Header";
import OfficeList from "@/components/homepage/OfficeList";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CityList />
      <Feature />
      <OfficeList />
    </>
  );
}
