import Image from "next/image";
import { BellIcon, SearchIcon } from "@/assets/icons";
import { RandomAvatar01 } from "@/assets/images";

export default function Header() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center">
        {/* User avatar */}
        <Image
          className="inline-block h-14 w-14 rounded-full ring-2 ring-white"
          alt="logo"
          src={RandomAvatar01}
          priority
        />

        {/* Greeting */}
        <span className="ml-6 text-3xl">
          <span className="font-light">
            Hello, <br />
          </span>
          <span className="font-semibold">User 01</span>
        </span>
      </div>

      <div className="flex items-center gap-6">
        {/* Search bar */}
        <div className="relative hidden w-80 rounded-2xl bg-gray-100 px-6 py-3 xl:block">
          <input
            className="w-56 bg-transparent placeholder:text-sm placeholder:text-black focus:outline-none"
            placeholder="Search anything..."
          />

          <span className="absolute right-6 top-[50%] -translate-y-[50%] transform text-orange-500">
            <SearchIcon />
          </span>
        </div>

        {/* Notification */}
        <div className="hidden w-fit cursor-pointer rounded-full border border-gray-200 p-3 lg:block">
          <BellIcon />
        </div>
      </div>
    </div>
  );
}
