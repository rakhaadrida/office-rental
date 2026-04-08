import OfficeCard from "../homepage/OfficeCard";
import { Office } from "@/entities/office";

export default function OfficeList({ cityOffices }: { cityOffices: Office[] }) {
  return (
    <section
      id="Fresh-Space"
      className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[70px] mb-[120px]"
    >
      <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
        Browse Offices
      </h2>

      {cityOffices.length > 0 ? (
        <div className="grid grid-cols-3 gap-[30px]">
          {cityOffices.map((office) => (
            <OfficeCard key={office.id} office={office} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No Office Spaces Available in this City</p>
      )}
    </section>
  );
}
