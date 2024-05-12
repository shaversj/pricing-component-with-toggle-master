import { Product } from "./rawData.tsx";
import Card from "./Card.tsx";
export default function CardList({ products }: { products: Product[] }) {
  return (
    <div className={"grid grid-cols-1 gap-y-8"}>
      {products.map((product) => (
        <Card product={product} />
      ))}
    </div>
  );
}
