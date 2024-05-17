export interface Product {
  id: string | number;
  name: string;
  price: number;
  features: string[];
}

export const products = [
  {
    id: 1,
    name: "Basic",
    price: 19.99,
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    id: 2,
    name: "Professional",
    price: 24.99,
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    id: 3,
    name: "Master",
    price: 39.99,
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
];
