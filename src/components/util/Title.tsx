"use client";

import { ChildrenProps } from "@/util/ChildrenProps";

function Title({ children }: ChildrenProps) {
  return (
    <div className="flex flex-row items-center w-full">
      <h1 className="text-3xl text-primary font-bold w-full duration-500 transition-colors">
        {children}
      </h1>
    </div>
  );
}

export default Title;
