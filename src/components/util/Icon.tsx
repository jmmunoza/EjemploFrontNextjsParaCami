import { ClassNameProps } from "@/util/ClassNameProps";
import { SVGAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IconProps {
  icon: (props: SVGAttributes<SVGElement>) => JSX.Element;
}

function Icon({ icon, className }: IconProps & ClassNameProps) {
  return icon({
    className: twMerge(
      "w-8 h-8 text-text-dark fill-text-dark " +
        className
    ),
  });
}

export { Icon };
