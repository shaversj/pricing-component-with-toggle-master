import { Product } from "./productData.tsx";
import Card from "./Card.tsx";

interface CardListProps {
  products: Product[];
  showMonthly: boolean;
}

export default function CardList({ products, showMonthly }: CardListProps) {
  return (
    <section className={"flex flex-col items-center gap-y-8 lg:flex lg:flex-row lg:justify-center"}>
      {products.map((product) => (
        <Card key={product.id} product={product} showMonthly={showMonthly} />
      ))}
    </section>
  );
}
