import { Product } from "./productData.tsx";

export default function Card({ product }: { product: Product }) {
  return (
    <>
      <div data-position={product.position} className={"rounded-md bg-white from-[#A3A8F0] to-[#696FDD] py-[31px] font-Montserrat data-[position=middle]:bg-gradient-to-r"}>
        <h3 data-position={product.position} className={"text-center text-[18px] font-bold leading-[28px] text-neutral-grayish-blue data-[position=middle]:text-white"}>
          {product.name}
        </h3>
        <div data-position={product.position} className={"flex items-center justify-center gap-x-[7.46px] font-bold text-neutral-dark-grayish-blue data-[position=middle]:text-white"}>
          <span className={"text-[40px]"}>$</span>
          <span className={"text-[72px]"}>{product.price}</span>
        </div>

        <div className={"mx-[29px]"}>
          <div
            data-position={product.position}
            className={
              "divide-neutral-grayish-line-color border-neutral-grayish-line-color flex flex-col divide-y-[1px] border-b-[1px] border-t-[1px] text-[15px] leading-[38px] data-[position=middle]:text-white"
            }
          >
            {product.features.map((feature) => (
              <span className={"text-center"}>{feature}</span>
            ))}
          </div>
          <button
            data-position={product.position}
            className={
              "mt-8 w-full rounded-md from-[#A3A8F0] to-[#696FDD] py-[10px] text-[13px] font-bold uppercase text-white data-[position=middle]:bg-white data-[position=first]:bg-gradient-to-r data-[position=last]:bg-gradient-to-r data-[position=middle]:text-[#6D72DE]"
            }
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
