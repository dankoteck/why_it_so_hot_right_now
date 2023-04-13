import Image from "next/image";

import { HomepageIcon } from "@/assets/icons";
import { Logo } from "@/assets/images";

export default function Sidebar() {
  return (
    <div className="flex w-32 flex-col items-center px-6 py-12">
      {/* Logo */}
      <Image alt="logo" src={Logo} priority />

      {/* List icons */}
      <div className="mt-16">
        <div className="mb-8 rounded-xl bg-orange-400 p-3 text-white shadow-xl shadow-gray-400">
          <HomepageIcon />
        </div>
        <div className="rounded-xl p-2 text-black">{/* <SettingIcon /> */}</div>
      </div>
    </div>
  );
}
