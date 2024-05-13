import Toggle from "./Toggle.tsx";

export default function Header() {
  return (
    <header className={"pb-[60px] pt-[44px] font-Montserrat"}>
      <h1 className={"text-center text-[32px] font-semibold text-neutral-grayish-blue"}>Our Pricing</h1>
      <div className={"flex items-center justify-center gap-x-6 pt-[30px] text-[15px] font-semibold leading-[28px] text-neutral-light-grayish-blue"}>
        <h2>Annually</h2>
        <Toggle />
        <h2>Monthly</h2>
      </div>
    </header>
  );
}
