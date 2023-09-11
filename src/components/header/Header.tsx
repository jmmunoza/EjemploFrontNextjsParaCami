"use client";

import { SegurosBolivarIcon } from "@/assets/icons/SegurosBolivar";
import Link from "next/link";

function Header() {
  return (
    <header className="z-10">
      <div className="w-full flex bg-background-secondary border-b-[1px] border-text-secondary">
        <div className="flex mx-auto justify-between w-full px-4">
          <div className="flex items-center space-x-4">
            <Link
              className="flex items-center justify-center py-2 group focus:outline-none outline-none"
              href={"/"}
            >
              <SegurosBolivarIcon className="w-full h-12" />
            </Link>
            <div className="self-end"></div>
          </div>
          <div className="flex align-center items-end my-2 space-x-2"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
