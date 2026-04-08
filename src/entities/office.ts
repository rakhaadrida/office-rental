export type Office = {
  id: number;
  title: string;
  slug: string;
  price: number;
  duration: string;
  address: string;
  about: string;
  location: string;
  rating: number;
  tags: string[];
  image: string;
  images: string[];
  features: Features[];
  salesContacts: SalesContact[];
  isFullyBooked: boolean;
};

export type Features = {
  label: string;
  description: string;
  icon: string;
};

export type SalesContact = {
  name: string;
  role: string;
  photo: string;
};
