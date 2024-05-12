export interface Product {
  name: string;
  price: number;
  features: string[];
}

export const products = [
  {
    name: "Basic",
    price: 19.99,
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    name: "Professional",
    price: 24.99,
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    name: "Master",
    price: 39.99,
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
];
