import { ChildrenProps } from "@/util/ChildrenProps";
import { ClassNameProps } from "@/util/ClassNameProps";
import { twMerge } from "tailwind-merge";

function Text({ children, className }: ChildrenProps & ClassNameProps) {
  return (
    <span
      className={twMerge(
        "text-sm text-text-dark " + className
      )}
    >
      {children}
    </span>
  );
}

export { Text };
