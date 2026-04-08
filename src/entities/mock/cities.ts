import { City } from "../city";
import { offices } from "./offices";

const cityNames = [
  "Jakarta Pusat",
  "Tangerang Selatan",
  "Depok",
  "Bandung",
  "Surabaya",
  "Medan",
  "Jogjakarta",
  "Malang",
  "Bekasi",
  "Semarang",
];

export const cities: City[] = cityNames.map((name, i) => {
  const officeCount = offices.filter(
    (office) => office.location === name,
  ).length;

  return {
    id: i + 1,
    name,
    officeCount,
    image: `/assets/images/thumbnails/thumbnails-${(i % 3) + 1}.png`,
    slug: name.toLowerCase().replace(/ /g, "-"),
  };
});
