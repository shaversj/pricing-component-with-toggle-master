import { Switch } from "@headlessui/react";

interface HeaderProps {
  showMonthlyHandler: () => void;
  showMonthly: boolean;
}

export default function Header({ showMonthlyHandler, showMonthly }: HeaderProps) {
  return (
    <header className={"pb-[60px] pt-[44px] font-Montserrat"}>
      <h1 className={"text-center text-[32px] font-semibold text-neutral-grayish-blue"}>Our Pricing</h1>
      <div className={"flex items-center justify-center gap-x-6 pt-[30px] text-[15px] font-semibold leading-[28px] text-neutral-light-grayish-blue"}>
        <h2>Annually</h2>
        <Switch checked={showMonthly} onChange={showMonthlyHandler} className="group inline-flex h-[32px] w-[56px] items-center rounded-full bg-gradient-to-r from-[#A3A8F0] to-[#696FDD] transition">
          <span className="size-6 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-7" />
        </Switch>
        <h2>Monthly</h2>
      </div>
    </header>
  );
}
