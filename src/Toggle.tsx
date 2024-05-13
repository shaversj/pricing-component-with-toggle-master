import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch checked={enabled} onChange={setEnabled} className="group inline-flex h-[32px] w-[56px] items-center rounded-full bg-gradient-to-r from-[#A3A8F0] to-[#696FDD] transition">
      <span className="size-6 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-7" />
    </Switch>
  );
}
