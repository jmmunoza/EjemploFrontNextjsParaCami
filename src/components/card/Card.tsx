"use client";

import { twMerge } from "tailwind-merge";
import { ChildrenProps } from "../../util/ChildrenProps";
import { ClassNameProps } from "../../util/ClassNameProps";

function Card({ children, className }: ChildrenProps & ClassNameProps) {
  return (
    <div
      className={twMerge(
        "h-full w-full rounded-lg bg-white",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
