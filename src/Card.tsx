import { Product } from "./productData.tsx";

interface CardProps {
  product: Product;
  showMonthly: boolean;
}

export default function Card({ product, showMonthly }: CardProps) {
  return (
    <>
      <div
        data-position={product.position}
        className={
          "w-[327px] rounded-xl  bg-white from-[#A3A8F0] to-[#696FDD] py-[31px] font-Montserrat drop-shadow-sm data-[position=middle]:bg-gradient-to-r lg:w-[350px] lg:data-[position=first]:rounded-r-none lg:data-[position=last]:rounded-l-none lg:data-[position=middle]:py-[55px]"
        }
      >
        <h3 data-position={product.position} className={"text-center text-[18px] font-bold leading-[28px] text-neutral-grayish-blue data-[position=middle]:text-white"}>
          {product.name}
        </h3>
        <div data-position={product.position} className={"flex items-center justify-center gap-x-[7.46px] pt-6 font-bold text-neutral-dark-grayish-blue data-[position=middle]:text-white"}>
          <span className={"text-[40px]"}>$</span>
          <span className={"text-[72px] leading-[71px]"}>{showMonthly ? product.price : parseFloat((product.price * 10 + 0.09).toFixed(2))}</span>
        </div>

        <div className={"mx-[29px] pt-8"}>
          <div
            data-position={product.position}
            className={
              "flex flex-col divide-y-[1px] divide-neutral-grayish-line-color border-b-[1px] border-t-[1px] border-neutral-grayish-line-color text-[15px] font-semibold leading-[38px] text-neutral-grayish-blue data-[position=middle]:text-white"
            }
          >
            {product.features.map((feature, index) => (
              <span key={index} className={"py-[7px] text-center"}>
                {feature}
              </span>
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
