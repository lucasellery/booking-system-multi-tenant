export type Service = {
  id: number;
  name: string;
  duration: number;
  price: number;
  description?: string;
};

export type CenterData = {
  name: string;
  logo: string;
  slogan: string;
  services: Service[];
  description: string;
};

export type Booking = {
  id: string;
  name: string;
  email: string;
  date: Date;
  time: string;
  createdAt: string;
};