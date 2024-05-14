import { Product } from "./productData.tsx";
import Card from "./Card.tsx";

interface CardListProps {
  products: Product[];
  showMonthly: boolean;
}

export default function CardList({ products, showMonthly }: CardListProps) {
  return (
    <div className={"grid grid-cols-1 gap-y-8"}>
      {products.map((product) => (
        <Card key={product.id} product={product} showMonthly={showMonthly} />
      ))}
    </div>
  );
}
