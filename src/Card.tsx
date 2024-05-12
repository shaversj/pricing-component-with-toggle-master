import { Product } from "./productData.tsx";

export default function Card({ product }: { product: Product }) {
  return (
    <>
      <div className={"rounded-md bg-white py-[31px] font-Montserrat"}>
        <h3 className={"text-center text-[18px] font-bold leading-[28px] text-neutral-grayish-blue"}>{product.name}</h3>
        <div className={"flex items-center justify-center gap-x-[7.46px] font-bold text-neutral-dark-grayish-blue"}>
          <span className={"text-[40px]"}>$</span>
          <span className={"text-[72px]"}>{product.price}</span>
        </div>

        <div className={"mx-[29px]"}>
          <div className={"divide-neutral-grayish-line-color border-neutral-grayish-line-color flex flex-col  divide-y-[1px] border-b-[1px] border-t-[1px]  text-[15px] leading-[38px]"}>
            {product.features.map((feature) => (
              <span className={"text-center"}>{feature}</span>
            ))}
          </div>
          <button className={"mt-8 w-full rounded-md bg-gradient-to-r from-[#A3A8F0] to-[#696FDD] py-[10px] text-[13px] font-bold uppercase text-white"}>Learn More</button>
        </div>
      </div>
    </>
  );
}
