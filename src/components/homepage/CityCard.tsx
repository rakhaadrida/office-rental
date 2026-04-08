import Link from "next/link";
import Image from "next/image";
import { City } from "@/entities/city";

export default function CityCard({ city }: { city: City }) {
  return (
    <Link href={`/city/${city.slug}`} className="card">
      <div className="relative flex shrink-0 w-[230px] h-[300px] rounded-[20px] overflow-hidden">
        <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] bg-[linear-gradient(180deg,_rgba(0,0,0,0)_49.87%,_rgba(0,0,0,0.8)_100%)] z-10">
          <h3 className="font-bold text-xl leading-[30px] text-white">
            {city.name}
          </h3>
          <p className="text-white">{city.officeCount} Offices</p>
        </div>
        <Image
          src={city.image}
          alt={city.name}
          width={0}
          height={0}
          sizes="100vw"
          className="absolute w-full h-full object-cover"
        />
      </div>
    </Link>
  );
}
